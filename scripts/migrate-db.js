#!/usr/bin/env node

/**
 * Database Migration Script
 * Migrates data from separate okdevtv and odevtube databases to a unified database
 */

require('dotenv').config()
const db = require('./models')

async function migrateDatabase() {
  try {
    console.log('Starting database migration...')

    // Sync all models with database
    console.log('Synchronizing database models...')
    await db.sequelize.sync({ alter: true })
    console.log('✓ Database models synchronized')

    // Verify tables exist
    const tables = await db.sequelize.query(
      `SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = ?`,
      {
        replacements: [process.env.DB_NAME || 'devdb'],
        type: db.sequelize.QueryTypes.SELECT,
      }
    )

    console.log('✓ Created/Updated tables:')
    tables.forEach(t => console.log(`  - ${t.TABLE_NAME}`))

    // Create indexes if needed
    console.log('Creating indexes...')
    
    const indexes = [
      'ALTER TABLE Accounts ADD INDEX idx_accountId (accountId), ADD INDEX idx_username (username);',
      'ALTER TABLE Channels ADD INDEX idx_channelId (channelId), ADD INDEX idx_category (category), ADD INDEX idx_lang (lang);',
      'ALTER TABLE Videos ADD INDEX idx_videoId (videoId), ADD INDEX idx_publishedAt (publishedAt);',
      'ALTER TABLE Transcripts ADD INDEX idx_videoId (videoId);',
    ]

    for (const indexSql of indexes) {
      try {
        await db.sequelize.query(indexSql)
      } catch (e) {
        // Index might already exist, skip error
        if (!e.message.includes('Duplicate key name')) {
          throw e
        }
      }
    }

    console.log('✓ Indexes created')

    console.log('\n✓ Migration completed successfully!')
    console.log('\nNext steps:')
    console.log('1. Update your .env file with the unified database configuration')
    console.log('2. If you have existing data, manually migrate it or use the migration tools in each service')
    console.log('3. Start the integrated application: npm start')

    process.exit(0)
  } catch (error) {
    console.error('Migration failed:', error)
    process.exit(1)
  }
}

migrateDatabase()
