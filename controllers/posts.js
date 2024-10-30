/* 
Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
*/

const posts = [
    {
        titolo: "post 1",
        contenuto: "contenuto del post 1",
        immagine: "/public/img1",
        tags: ["tag1", "tag2", "tag3", "tag4"]
    },
    {
        titolo: "post 2",
        contenuto: "contenuto del post 2",
        immagine: "/public/img2",
        tags: ["tag1", "tag2", "tag3", "tag4"]
    },
    {
        titolo: "post 3",
        contenuto: "contenuto del post 3",
        immagine: "/public/img3",
        tags: ["tag1", "tag2", "tag3", "tag4"]
    },
    {
        titolo: "post 4",
        contenuto: "contenuto del post 4",
        immagine: "/public/img4",
        tags: ["tag1", "tag2", "tag3", "tag4"]
    },
    {
        titolo: "post 5",
        contenuto: "contenuto del post 5",
        immagine: "/public/img5",
        tags: ["tag1", "tag2", "tag3", "tag4"]
    }
]

module.exports.index = function (req, res){
    res.json(posts)
}