#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const files = [
  './dao/videoDao.js',
  './dao/channelDao.js',
  './dao/transcriptDao.js',
  './dao/accountDao.js',
  './web/routes/index.js',
  './web/routes/admin.js',
  './web/utils/transcriptUtil.js',
  './web/utils/uri.js',
  './web/utils/summary.js',
  './youtube.js',
];

function convertToCommonJS(content, filePath) {
  // Replace import statements with require
  content = content.replace(/import\s+(\{[^}]*\}|[^}]+?)\s+from\s+['"]([^'"]+)['"]/g, (match, imports, from) => {
    // Handle default imports
    if (imports.includes('default') || !imports.includes('{')) {
      return `const ${imports.trim()} = require('${from}')`;
    }
    return `const ${imports} = require('${from}')`;
  });

  // Replace export default
  content = content.replace(/export\s+default\s+/g, 'module.exports = ');

  // Replace export named
  content = content.replace(/export\s+\{([^}]+)\}/g, (match, exports) => {
    const exportList = exports.split(',').map(e => e.trim());
    let code = '';
    exportList.forEach(exp => {
      code += `module.exports.${exp} = ${exp}\n`;
    });
    return code;
  });

  // Replace export const/function at the beginning of line
  content = content.replace(/export\s+(const|function|class)\s+/g, '$1 ');

  return content;
}

// Create conversion script
console.log('Converting ES modules to CommonJS...');
console.log('Note: This script needs to be run from the okdevtv directory');
