# Ballerina language
- https://ballerina.io

```bal
public function main() returns error? {
    string name = "Katie Melua";

    // XML literal.
    xml album = xml
    `<Album>
        <name>Piece By Piece</name>
        <artist>${name}</artist>
        <song>Spider's Web</song>
        <song>Nine Million Bicycles</song>
    </Album>`;
    io:println("XML Value: ", album);

    // Extract the list of song names from the XML value using a query expression.
    string[] songs = from var song in album/<song> select song.data();
    io:println("Extracted song names: ", songs);

    // JSON literal.
    json jAlbum = {
        "name": (album/<name>).data(),
        "artist": name,
        songs
    };
    io:println("JSON value: ", jAlbum);

    json artistName = check jAlbum.artist;
    io:println("Album artist: ", artistName);
}
```
