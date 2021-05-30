<h1 align="center"> NodeJS ile Web Scraping</h1>
<p align="center"> 8notes sitesi üzerinde enstrümana, stile veya sanatçıya göre arama yapabilmenizi sağlayan, NodeJS ile geliştirilmiş bir scraping aracı. </p>

# Kurulum
Bilgisayarınızda NodeJS ve Npm kurulu olmalıdır. 

### Node Kurulumu
Node.js kurulum dosyalarına nodejs resmi sitesinden[nodejs.org] ulaşabilirsiniz. Resmi siteye girdiğinizde işletim sisteminize ve işletim sistemi mimarinize göre size kurulum dosyası önerisinde bulunacaktır. Kurulum tamamlandıktan sonra kurulum sonucu Windows komut istemini (CMD veya PowerShell) çalıştırdıktan sonra
`node -v`</br>
komutunu çalıştırarak bilgisayarınıza kurmuş olduğunuz Node.js sürümünü görebilirsiniz.

### Gerekliliklerin Kurulumu
Dosya dizininde ```npm i``` komutunu çalıştımanız yeterli. Bilgisayarınıza 
+ Terminalden komut verebilmenizi sağlayan `yargs`
+ Scraping yapabilmenizi sağlayan `chromedriver ve selenium-webdriver`
+ Verileri veritabanına yazabilmeniz için `mongodb`
+ Terminal ekranında string renklendirmeleri ve düzenlemeleri için `chalk` </br>
paketleri kurulacaktır.

# Kullanım
8Notes sitesindeki enstrumanların klasik türündeki müzikleri ve içeriklerini çekmek için öncelikle; </br>
```bash
node app.js all
```
komutu ile klasik kategorisindeki müziklerin isimlerini, bestekarlarını, linklerini ve zorluk derecelerini çekebilirsiniz. Ardından, </br>
```bash
node app.js detaylar
```
komutu ile önceki komut ile çektiğiniz müziklerin tek tek linklerine giderek, nota görsellerini, açıklamalarını ve midi linklerini çekip veritabanına kaydedebilirsiniz.
Ayrıca; </br>
+ İstedğiniz bir enstruman türünde arama yapabilmek için;</br>
```bash
node app.js EnstrumanAra --enstruman="<Aramak istediğiniz argüman. Ör: Guitar>"
```
+ İstediğiniz bir stil türünde arama yapabilmek için;</br>
```bash
node app.js StilAra --stil="<Aramak istediğiniz argüman. Ör: Jazz>"
```
+ İstediğiniz bir bestekar türünde arama yapabilmek için;</br>
```bash
node app.js BestekarAra --bestekar="<Aramak istediğiniz argüman. Ör: Mozart>"
```
komutlarını çalıştırmanız yeterli olacaktır.
