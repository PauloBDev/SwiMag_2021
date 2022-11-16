

const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database('./data/ecoalDB', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE
  , (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Connected to the ecoal database.');
    }
  });


let query = [
  "PRAGMA foreign_keys = ON",
  "DROP TABLE IF EXISTS article_tag",
  "DROP TABLE IF EXISTS user",
  "DROP TABLE IF EXISTS article",
  "DROP TABLE IF EXISTS media",
  "DROP TABLE IF EXISTS tag",


  "CREATE TABLE media (id INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT NOT NULL, file TEXT NOT NULL)",
  "CREATE TABLE user (id_User INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, photo TEXT NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL, access TEXT NOT NULL)",
  "CREATE TABLE article (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, content TEXT NOT NULL, thumbnailURL TEXT, id_media INTEGER REFERENCES media(id), mediaURL TEXT)",
  "CREATE TABLE tag (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)",
  "CREATE TABLE article_tag (id INTEGER PRIMARY KEY AUTOINCREMENT, id_article INTEGER REFERENCES article(id), id_tag INTEGER REFERENCES tag(id))",
  "INSERT INTO user (id_User, name, photo, email, password, access) values ('1', 'Tom', 'ecoal.jpg', 'tom@gmail.com','123','admin')",
  "INSERT INTO user (id_User, name, photo, email, password, access) values ('2', 'Yue', 'ecoal.jpg', 'yue@gmail.com','456','user')",
  "INSERT INTO user (id_User, name, photo, email, password, access) values ('3', 'Remi', 'ecoal.jpg', 'remi@gmail.com','789','user')",
  "INSERT INTO user (id_User, name, photo, email, password, access) values ('2', 'Paulo', 'ecoal.jpg', 'paulo@gmail.com','135','user')",
  "INSERT INTO media (id, type, file) values ('1', 'photo', 'Olimpics')",
  "INSERT INTO media (id, type, file) values ('2', 'video', 'Olimpics')",
  "INSERT INTO media (id, type, file) values ('3', 'sound', 'Olimpics')",
  "INSERT INTO article (id, title, content, thumbnailURL, id_media, mediaURL) values ('1','SwiMag', '<h1>Hello from ecoal</h1><p>Nice to see you in <strong>Lens</strong>. Enjoy !</p>','ecoal.jpg', '1', 'image')",
  "INSERT INTO article (id, title, content, thumbnailURL, id_media, mediaURL) values ('2','Swim for fitness', '<h1>Swimming is good for you...<strong>really good</strong>. Enjoy !</p>','ecoal.jpg', '2', 'image')",
  "INSERT INTO article (id, title, content, thumbnailURL, id_media, mediaURL) values ('3','Learn to swim', '<h1>This is hoz you swim...</strong>. Enjoy !</p>','ecoal.jpg', '3', 'image')",
  "INSERT INTO tag (id, name) values ('1', 'registered')",
  "INSERT INTO tag (id, name) values ('2', 'unregistered')",
  "INSERT INTO article_tag (id, id_article, id_tag) values ('1', '1', '1')",
  "INSERT INTO article_tag (id, id_article, id_tag) values ('2', '2', '2')",
  "INSERT INTO article_tag (id, id_article, id_tag) values ('3', '3', '2')",
]


db.serialize(() => {

  query.forEach(item => {
    db.run(item, err => {
      if (err)
        return console.error(err.message)
      console.log(item + ` done`)
    })
  })

})

db.close(err => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
