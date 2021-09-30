window.onload = function() {
    let wynik = Math.floor(Math.random() * (9 - 1)) + 1;
    // let wynik = 1;
    console.log('Załaduj tapete i style nr: ' + wynik)
    let tlo = `'./zdjecia/wallpapers/screen${wynik}.jpg'`
    console.log(tlo)
    document.querySelector('body').style.background = `url(${tlo}) no-repeat center`
    document.querySelector('body').style.backgroundSize = 'cover';
    document.querySelector('body').style.width = '100%';
    document.querySelector('body').style.height= '100vh';

    let podpis = document.querySelector('.podpis')
    // wynik == 1 ? podpis.innerHTML = 'Photo by Anthony Intraversato on Unsplash' : wynik == 2 ? podpis.textContent = 'Photo by Joseph Ngabo on Unsplash' : podpis.textContent = 'Dupa3';
    wynik == 1 ? podpis.innerHTML = 'Photo by <a style ="color: white;" href="https://unsplash.com/@anthonyintraversato?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anthony Intraversato</a> on <a style ="color: white;" href="https://unsplash.com/s/photos/hip-hop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' : wynik == 2 ? podpis.innerHTML = 'Photo by <a style ="color: white;" href="https://unsplash.com/@jngabo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joseph Ngabo</a> on <a style ="color: white;" href="https://unsplash.com/s/photos/hip-hop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' : wynik == 3 ? podpis.innerHTML ='Photo by <a style ="color: white;" href="https://unsplash.com/@rc_scout?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Richard Ciraulo</a> on <a style ="color: white;" href="https://unsplash.com/s/photos/hip-hop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' : wynik == 4 ? podpis.innerHTML = 'Photo by <a style ="color: white;" href="https://unsplash.com/@mariuschristensen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Marius Christensen</a> on <a style ="color: white;" href="https://unsplash.com/s/photos/hip-hop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' : wynik == 5 ? podpis.innerHTML = 'Photo by <a style ="color: white;" href="https://unsplash.com/@gcowie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Gordon Cowie</a> on <a style ="color: white;" href="https://unsplash.com/s/photos/hip-hop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' : wynik == 6 ? podpis.innerHTML = 'Photo by <a style ="color: white;" href="https://unsplash.com/@bwl667?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brian Lundquist</a> on <a style ="color: white;" href="https://unsplash.com/s/photos/hip-hop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' : wynik == 7 ? podpis.innerHTML = 'Photo by <a style ="color: white;" href="https://unsplash.com/@benjaminlehman?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">benjamin lehman</a> on <a style ="color: white;" href="https://unsplash.com/s/photos/hip-hop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' : wynik == 8 ? podpis.innerHTML = 'Photo by <a style ="color: white;" href="https://unsplash.com/@photographer88?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Zika Radosavljevic</a> on <a style ="color: white;" href="https://unsplash.com/s/photos/hip-hop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>' : podpis.innerHTML ='Brak informacji o zdjęciu w tle' ;

    let kolorButtona = document.querySelector('.searchbtn')
    wynik == 1 ? kolorButtona.classList.toggle('searchbtn1') : wynik == 2 ? kolorButtona.classList.toggle('searchbtn2') : wynik == 3 ? kolorButtona.classList.toggle('searchbtn3') : wynik == 4 ? kolorButtona.classList.toggle('searchbtn4') : wynik == 5 ? kolorButtona.classList.toggle('searchbtn5') : wynik == 6 ? kolorButtona.classList.toggle('searchbtn6') : wynik == 7 ? kolorButtona.classList.toggle('searchbtn7') : kolorButtona.classList.toggle('searchbtn8');
  };
//   Trzeba teraz dodać więcej tapet i style przycisku

let itemsNumber = document.querySelector('.klasaTestowa');
let btn = document.querySelector('button')
let data = '';

function closeModal(){
    $('#exampleModal').modal('hide');
    document.querySelector('.modal-body .YT').innerHTML = '';
}

function myFunction(){
    document.querySelector('.lowerWrapper').textContent = ' ';
    let data = document.querySelector('.input').value.toLowerCase();
    console.log(data)
    

    if(data){
    itemsNumber.style.display = 'none';
    document.querySelector('.input').value = '';
    fetch('data/data.json')
    .then(res =>res.json())
    .then(function(res){
    console.log(res)

    let fin = res.filter( record => record.name.toLowerCase() === data || record.miasto.toLowerCase() === data || record.realname.toLowerCase() === data)
    let finLength = fin.length;

        

    console.log(fin.length)
    console.log(fin.name)

    let visible = document.querySelector('.lowerWrapper');
    visible.style.display = "block";

    if(fin.length === 1){
    itemsNumber.style.display = 'none';
    itemsNumber.innerHTML = '';
    console.log(fin.length)
    document.querySelector('.lowerWrapper').innerHTML = ' ';

    let createDiv = document.createElement('div');
    createDiv.classList = 'divv';
    document.querySelector('.lowerWrapper').appendChild(createDiv);


    let imagine = document.querySelector('.divv');
    imagine.style.float = "right";
    imagine.innerHTML = fin[0].zdjecie;
    

        let createFirstDiv = document.createElement('div');
        createFirstDiv.classList = 'tekst0';
        document.querySelector('.lowerWrapper').appendChild(createFirstDiv);

        let createSecondDiv = document.createElement('div');
        createSecondDiv.classList = 'tekst';
        document.querySelector('.lowerWrapper').appendChild(createSecondDiv); 

        let createFourthDiv = document.createElement('div');
        createFourthDiv.classList = 'tekst4';
        document.querySelector('.lowerWrapper').appendChild(createFourthDiv);

        let createFivethDiv = document.createElement('div');
        createFivethDiv.classList = 'tekst5';
        document.querySelector('.lowerWrapper').appendChild(createFivethDiv);

        let createFivethOneDiv = document.createElement('div');
        createFivethOneDiv.classList = 'tekst5_1';
        document.querySelector('.lowerWrapper').appendChild(createFivethOneDiv);

        //pomysł na odpuszczenie sobie historii i skupienie sie na istotnych rzeczach
        // let createSixthDiv = document.createElement('div');
        // createSixthDiv.classList = 'tekst6';
        // document.querySelector('.lowerWrapper').appendChild(createSixthDiv);

        let createThirdDiv = document.createElement('iframe');
        createThirdDiv.classList = 'tekst3';
        createThirdDiv.src = fin[0].link;
        createThirdDiv.width = '620px';
        createThirdDiv.height = '360px';
        createThirdDiv.frameBorder = 0;
        createThirdDiv.gesture = 'media';
        createThirdDiv.allow = 'encrypted-media';
        createThirdDiv.allowFullscreen;
        createThirdDiv.style.marginTop = '30px'
        document.querySelector('.lowerWrapper').appendChild(createThirdDiv);

        document.querySelector('.tekst0').textContent = 'Imię i Nazwisko: ' + fin[0].realname;  
        document.querySelector('.tekst').textContent = 'Pseudonim: ' + fin[0].name;    
        document.querySelector('.tekst4').textContent = 'Skąd pochodzi: ' + fin[0].miasto;
        document.querySelector('.tekst5').textContent = 'Data urodzenia: ' + fin[0].data_urodzenia;
        document.querySelector('.tekst5_1').textContent = 'Data śmierci: ' + _.get(fin[0], 'data_smierci', 'nie dotyczy');

        //pomysł na odpuszczenie sobie historii i skupienie sie na istotnych rzeczach
        // document.querySelector('.tekst6').textContent = 'Fakty: ' + fin[0].historia;
        // document.querySelector('.tekst3').innerHTML = ' <iframe src="' + fin.link + '"width="420" height="315"></iframe>'
        
        
    }
    
    else if(fin.length > 1){
        let odmiana = '';
        itemsNumber.innerHTML = '';
        finLength == 1 ? odmiana = "wynik" : finLength == 2 ? odmiana = "wyniki" : finLength == 3 ? odmiana = "wyniki" : finLength == 4 ? odmiana = "wyniki" : odmiana = "wyników";
        itemsNumber.innerHTML = 'Znaleziono ' + finLength +' '+  odmiana + ' w mieście ' + data;
        itemsNumber.style.display = 'block';
        let createUl = document.createElement('ul');
        createUl.classList = 'list-group';
        document.querySelector('.lowerWrapper').appendChild(createUl);
        let liste = document.querySelector('.list-group');
        fin.forEach(function(item, index){ //dodalem tu index. teraz trzeba to przekazac do kazdego data-key w <li>
        console.log('Wypisuje '+ item.name);
        let test = document.createElement('li');
        test.classList = 'list-group-item list-group-item-action list-group-item-light';
        test.style.fontSize = '30px'
        test.innerHTML = item.name;
        test.dataset.key = index; //powinno dodac kolejno dataset do kazdego li
        let CreateDiv = document.createElement('div');
        CreateDiv.classList = 'miniaturkaClass';
        CreateDiv.style.float = 'right';
        CreateDiv.innerHTML = item.zdjecie;
        test.appendChild(CreateDiv)
        liste.appendChild(test) // dodanie stringów do wrapper
        test.addEventListener("click", (e) => {
            const index2 = e.target.dataset.key;
            document.querySelector(`li[data-key="${index2}"]`)
            $('#exampleModal').modal('show');
            // tu trzeba dodać to co ma sie wyswietlać w modalu
            document.querySelector('.modal-title').textContent = `${fin[index2].name}`;
            document.querySelector('.modal-body .imie').textContent = `Imię i Nazwisko: ${fin[index2].realname}`;
            document.querySelector('.modal-body .dUrodzenia').textContent = `Data Urodzenia: ${fin[index2].data_urodzenia}`;
            document.querySelector('.modal-body .dSmierci').textContent = `Data Śmierci: ${_.get(fin[index2], 'data_smierci', 'nie dotyczy')}`;
            document.querySelector('.modal-body .mUrodzenia').textContent = `Miejsce Urodzenia: ${fin[index2].miasto}`;
            let miniaturka = document.querySelector('.modal-body .miniaturka');
            miniaturka.style.float = 'right';
            miniaturka.innerHTML = fin[index2].zdjecie;

            //pomysł na odpuszczenie sobie historii i skupienie sie na istotnych rzeczach
            // document.querySelector('.modal-body .fakty').textContent = `Informacje: ${fin[index2].historia}`;

            // dodaja sie linki z youtube zamiast podmieniac
            const youTube = document.createElement('iframe');
            youTube.src = fin[index2].link;
            youTube.width = '467px';
            youTube.height = '360px';
            youTube.frameBorder = 0;
            youTube.gesture = 'media';
            youTube.allow = 'encrypted-media';
            youTube.allowFullscreen;
            youTube.style.marginTop = '30px'
            document.querySelector('.modal-body .YT').appendChild(youTube);           
            console.log(fin[index2].name)
            console.log(index2)
        });
    })
    }
    else{
        itemsNumber.style.display = 'none';
        itemsNumber.innerHTML = '';
        let visible = document.querySelector('.lowerWrapper');
        visible.style.display = "block";
        document.querySelector('.lowerWrapper').textContent = 'Nie ma takiej pozycji w bazie danych';
        
    }
})

}
else{
    itemsNumber.style.display = 'none';
    itemsNumber.innerHTML = '';
    let visible = document.querySelector('.lowerWrapper');
    visible.style.display = "block";
    document.querySelector('.lowerWrapper').textContent = 'Musisz coś wpisac'
}
}


    let wege = document.getElementById('button');
        wege.addEventListener("keydown", function(e){
        if(e.code === "Enter"){
         myFunction()
        }
        else{}
})
   
