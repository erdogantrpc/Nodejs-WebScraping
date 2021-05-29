const {Builder, By, Key, until} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const chalk = require('chalk');
const fs = require('fs');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

const EnstrumanAra = function (title) {
    if (title == "Piano") {
        console.log(chalk.green.inverse('Piano türünde aramaya yapılmaktadır'))
        EnstrumanVerileriCek(title)
    } else if (title == "Guitar"){
        console.log(chalk.green.inverse('Guitar türünde aramaya yapılmaktadır'))
        EnstrumanVerileriCek(title)
    } else if (title == "Violin"){
        console.log(chalk.green.inverse('Violin türünde aramaya yapılmaktadır'))
        EnstrumanVerileriCek(title)
    } else if (title == "Flute"){
        console.log(chalk.green.inverse('Flute türünde aramaya yapılmaktadır'))
        EnstrumanVerileriCek(title)
    } else if (title == "Saxophone"){
        console.log(chalk.green.inverse('Saxophone türünde aramaya yapılmaktadır'))
        EnstrumanVerileriCek(title)
    } else if (title == "Voice"){
        console.log(chalk.green.inverse('Voice türünde aramaya yapılmaktadır'))
        EnstrumanVerileriCek(title)
    } else if (title == "Clarinet"){
        console.log(chalk.green.inverse('Clarinet türünde aramaya yapılmaktadır'))
        EnstrumanVerileriCek(title)
    } else if (title == "Trumpet"){
        console.log(chalk.green.inverse('Trumpet türünde aramaya yapılmaktadır'))
        EnstrumanVerileriCek(title)
    } else {
        console.log(console.log(chalk.red.inverse('Başka bir tür aradınız')))
    }
}

const BestekarAra = function (title) {
    if (title == "Bach") {
        console.log(chalk.green.inverse('Bestekar Bach için arama yapılmaktadır.'))
        BestakarVerileriCek(title)
    } else if (title == "Beethoven"){
        console.log(chalk.green.inverse('Bestekar Beethoven için arama yapılmaktadır.'))
        BestakarVerileriCek(title)
    } else if (title == "Mozart"){
        console.log(chalk.green.inverse('Bestekar Mozart için arama yapılmaktadır.'))
        BestakarVerileriCek(title)
    } else if (title == "Tchaikovsky"){
        console.log(chalk.green.inverse('Bestekar Tchaikovsky için arama yapılmaktadır.'))
        BestakarVerileriCek(title)
    } else if (title == "Scott Joplin"){
        console.log(chalk.green.inverse('Bestekar Scott Joplin için arama yapılmaktadır.'))
        BestakarVerileriCek(title)
    } else if (title == "Chopin"){
        console.log(chalk.green.inverse('Bestekar Chopin için arama yapılmaktadır.'))
        BestakarVerileriCek(title)
    } else {
        console.log(console.log(chalk.red.inverse('Listede olmayan bir bestekar aradınız')))
    }
}

const StilAra = function (title) {
    if (title == "Classical") {
        console.log(chalk.green.inverse('Classical müzik türünde aramaya yapılmaktadır'))
        StilVerileriCek(title)
    } else if (title == "Jazz"){
        console.log(chalk.green.inverse('Jazz müzik türünde aramaya yapılmaktadır'))
        StilVerileriCek(title)
    } else if (title == "Traditional"){
        console.log(chalk.green.inverse('Traditional müzik türünde aramaya yapılmaktadır'))
        StilVerileriCek(title)
    } else if (title == "Rock and Pop"){
        console.log(chalk.green.inverse('Rock and Pop müzik türünde aramaya yapılmaktadır'))
        StilVerileriCek(title)
    } else if (title == "Christmas"){
        console.log(chalk.green.inverse('Christmas müzik türünde aramaya yapılmaktadır'))
        StilVerileriCek(title)
    } else if (title == "World"){
        console.log(chalk.green.inverse('World müzik türünde aramaya yapılmaktadır'))
        StilVerileriCek(title)
    } else {
        console.log(console.log(chalk.red.inverse('Başka bir tür aradınız')))
    }
}

const EnstrumanVerileriCek = function (title) {
    var param = title + "/classical/sheet_music/";
    var obj = {
        table: []
     };
    (async function example() {
        try {
        var driver = new webdriver.Builder().forBrowser('chrome').build();
        // Navigate to Url
        await driver.get('https://www.8notes.com/'+param);
        let element = await driver.findElement(By.css('.table-responsive'));
        let body = await driver.findElement(By.tagName('tbody'));
        let local_pieces = await body.findElements(By.tagName("tr"));
        for (let e of local_pieces) {
            let link = await e.getAttribute("onclick");
            let link_split = link.split("'")[1];
            let text = await e.getText();
            console.log(text + ": " + link_split);
        }
        var link2 = await driver.findElement(By.css(".pagination>ul>li:last-child>a"));
        do {
            await driver.get(link2.getAttribute("href"));
            let element = await driver.findElement(By.css('.table-responsive'));
            let body = await driver.findElement(By.tagName('tbody'));
            let local_pieces = await body.findElements(By.tagName("tr"));
            for (let e of local_pieces) {
                let link = await e.getAttribute("onclick");
                let link_split = link.split("'")[1];
                let text = await e.getText();
                console.log(text + ": " + link_split);
            }
            link2 = await driver.findElement(By.css(".pagination>ul>li:last-child>a"));
            var endPage = await link2.getAttribute("href");
        } while (endPage != "javascript:;")
    
        } catch (error){
            console.log(error);
        } finally{
            driver.quit();
        }
    })();
}

const ButunVerileriCek = async function () {
    var enstrumanlar = ["piano", "guitar", "violin", "flute", "saxophone", "voice", "clarinet", "trumpet"]
    var driver = new webdriver.Builder().forBrowser('chrome').build();
    var obj = {
        table: []
    };
    for (var x of enstrumanlar) {
        var enstruman = x
        var param = x + "/classical/sheet_music";
        try {
        // Navigate to Url
        await driver.get('https://www.8notes.com/'+param);
        let element = await driver.findElement(By.css('.table-responsive'));
        let body = await driver.findElement(By.tagName('tbody'));
        let local_pieces = await body.findElements(By.tagName("tr"));
        for (let e of local_pieces) {
            let link = await e.getAttribute("onclick");
            let link_split = link.split("'")[1];
            let text = await e.getText();
            let difficultyImg = await e.findElement(By.css("td:nth-child(4) > img"))
            let difficulty = await difficultyImg.getAttribute("title")
            obj.table.push({
                "enstruman" : enstruman,
                "text": text,
                "link": link_split,
                "difficulty" : difficulty
            });
            fs.writeFile ("ButunVeriler3.json", JSON.stringify(obj), function(err) {
                if (err) throw err;
                }
            );
        }
        var link2 = await driver.findElement(By.css(".pagination>ul>li:last-child>a"));
        do {
            await driver.get(link2.getAttribute("href"));
            let element = await driver.findElement(By.css('.table-responsive'));
            let body = await driver.findElement(By.tagName('tbody'));
            let local_pieces = await body.findElements(By.tagName("tr"));
            for (let e of local_pieces) {
                let link = await e.getAttribute("onclick");
                let link_split = link.split("'")[1];
                let text = await e.getText();
                let difficultyImg = await e.findElement(By.css("td:nth-child(4) > img"))
                let difficulty = await difficultyImg.getAttribute("title")
                obj.table.push({
                    "enstruman" : enstruman,
                    "text": text,
                    "link": link_split,
                    "difficulty" : difficulty
                });
                fs.writeFile ("ButunVeriler3.json", JSON.stringify(obj), function(err) {
                    if (err) throw err;
                    }
                );
            }
            link2 = await driver.findElement(By.css(".pagination>ul>li:last-child>a"));
            var endPage = await link2.getAttribute("href");
        } while (endPage != "javascript:;")
    
        } catch (error){
            console.log(error);
        }
    }
    driver.quit()
}

const ParcaDetaylariniCek = async function () {

    var contents  = fs.readFileSync("ButunVeriler.json");
    var parcalar = JSON.parse(contents);
    var driver = new webdriver.Builder().forBrowser('chrome').build();
    console.log(parcalar.table.length)
    
    var newObj = {
        table : []
    }

    for(var i = 0; i < parcalar.table.length; i++){
        try {
            console.log(i)
            var notaImg = [];
            // Navigate to Url
            await driver.get('https://www.8notes.com' + parcalar.table[i]["link"]);
            const aTagForMidi = await driver.findElement(By.className("midi_list"))
            const midiLinki = await aTagForMidi.getAttribute('href');
            const iceriklerTablosu = await driver.findElement(By.css('#lower_container > div > table'));
            const icerikler = await iceriklerTablosu.getText();
            const images = await driver.findElements(By.className('img-container'));
            for (var j = 0; j < images.length; j++) {
                const image = await images[j].findElement(By.css('img'));
                const imageLink = await image.getAttribute('src');
                notaImg.push(imageLink);
            }
            newObj.table.push({
                "enstruman" : parcalar.table[i].enstruman,
                "text" : parcalar.table[i].text,
                "link" : parcalar.table[i].link,
                "difficulty" : parcalar.table[i].difficulty,
                "midiLinki" : midiLinki,
                "icerikler" : icerikler,
                "notaImg" : notaImg
            })
            fs.writeFile ("Parcalar_ve_Detaylari.json", JSON.stringify(newObj), function(err) {
                if (err) throw err;
                }
            );
        } catch (error){
            console.log(error);
        }
    }
    driver.quit()
    
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    
    //Veriyi Collection'a yaz
    MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.createCollection("pieces", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        //db.close();
      });
      var contents  = fs.readFileSync("ParcaDetaylari.json");
        var myobj = JSON.parse(contents);
      dbo.collection("pieces").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });
    
    //Verileri Oku
    MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mydb");
      dbo.collection("pieces").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result[0]);
        db.close();
      });
    });
}





const ParametreIleVerileriCek = async function (title) {
    var enstrumanlar = ["piano", "guitar", "violin", "flute", "saxophone", "voice", "clarinet", "trumpet"]
    if (enstrumanlar.find(enstruman => enstruman == title) == undefined) {
        console.log("Olmayan bir tür aradınız!")
        return 0
    }

    var driver = new webdriver.Builder().forBrowser('chrome').build();
    var obj = {
        table: []
    };
    var param = title + "/all";
    try {
    // Navigate to Url
    await driver.get('https://www.8notes.com/'+param);
    let element = await driver.findElement(By.css('.table-responsive'));
    let body = await driver.findElement(By.tagName('tbody'));
    let local_pieces = await body.findElements(By.tagName("tr"));
    for (let e of local_pieces) {
        let link = await e.getAttribute("onclick");
        let link_split = link.split("'")[1];
        let text = await e.getText();
        obj.table.push({
            "enstruman" : title,
            "text": text,
            "link": link_split
        });
        fs.writeFile ("Yeni.json", JSON.stringify(obj), function(err) {
            if (err) throw err;
            }
        );
    }
    var link2 = await driver.findElement(By.css(".pagination>ul>li:last-child>a"));
    do {
        await driver.get(link2.getAttribute("href"));
        let element = await driver.findElement(By.css('.table-responsive'));
        let body = await driver.findElement(By.tagName('tbody'));
        let local_pieces = await body.findElements(By.tagName("tr"));
        for (let e of local_pieces) {
            let link = await e.getAttribute("onclick");
            let link_split = link.split("'")[1];
            let text = await e.getText();
            obj.table.push({
                "enstruman" : title,
                "text": text,
                "link": link_split
            });
            fs.writeFile ("Yeni.json", JSON.stringify(obj), function(err) {
                if (err) throw err;
                }
            );
        }
        link2 = await driver.findElement(By.css(".pagination>ul>li:last-child>a"));
        var endPage = await link2.getAttribute("href");
    } while (endPage != "javascript:;")

    } catch (error){
        console.log(error);
    }
driver.quit()
}


const BestakarVerileriCek = function (title) {
    var param = title;
    (async function example() {
        try {
        var driver = new webdriver.Builder().forBrowser('chrome').build();
        // Navigate to Url
        await driver.get('https://www.8notes.com/'+param);
        let element = await driver.findElement(By.css('.table-responsive'));
        let body = await driver.findElement(By.tagName('tbody'));
        let local_pieces = await body.findElements(By.tagName("tr"));
        for (let e of local_pieces) {
            let link = await e.getAttribute("onclick");
            let link_split = link.split("'")[1];
            let text = await e.getText();
            console.log(text + ": " + link_split);
        } } catch (error){
            console.log(error);
        } finally{
        driver.quit();
        }
    })();
}

const StilVerileriCek = function (title) {
    var param = "all/" + title + "/sheet_music/";
    (async function example() {
        try {
        var driver = new webdriver.Builder().forBrowser('chrome').build();
        // Navigate to Url
        await driver.get('https://www.8notes.com/'+param);
        let element = await driver.findElement(By.css('.table-responsive'));
        let body = await driver.findElement(By.tagName('tbody'));
        let local_pieces = await body.findElements(By.tagName("tr"));
        for (let e of local_pieces) {
            let link = await e.getAttribute("onclick");
            let link_split = link.split("'")[1];
            let text = await e.getText();
            console.log(text + ": " + link_split);
        } } catch (error){
            console.log(error);
        } finally{
        driver.quit();
        }
    })();
}

module.exports = {
    EnstrumanAra : EnstrumanAra,
    BestekarAra : BestekarAra,
    StilAra : StilAra,
    ButunVerileriCek : ButunVerileriCek,
    ParcaDetaylariniCek: ParcaDetaylariniCek,
    ParametreIleVerileriCek : ParametreIleVerileriCek
}