let link='';
fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
.then(num=>num.json())
.then(link1=>
{
    function sorting(li1,li2)
    {
        return li2.points-li1.points;
    }

    link=link1.sort(sorting)
    console.log(link)

    document.querySelector('.n2').innerText=`${link[0].name}-${link[0].points}`;
    document.querySelector('.n11').innerText=`${link[1].name}-${link[1].points}`;
    document.querySelector('.n12').innerText=`${link[2].name}-${link[2].points}`;

    document.querySelector('.m11').innerHTML=`<img src="${link[0].avatar}">`;
    document.querySelector('.m2').innerHTML=`<img src="${link[1].avatar}">`;
    document.querySelector('.m12').innerHTML=`<img src="${link[2].avatar}">`;

          
    document.querySelector('.c31').innerText = `${link[3].name}`; 
    document.querySelector('.c41').innerText = `${link[3].points}`;
    document.querySelector('.c21').innerHTML = `<img src="${link[3].avatar}">`;  
    
    document.querySelector('.c32').innerText = `${link[4].name}`; 
    document.querySelector('.c42').innerText = `${link[4].points}`;
    document.querySelector('.c22').innerHTML = `<img src="${link[4].avatar}">`;  

    document.querySelector('.c33').innerText = `${link[5].name}`; 
    document.querySelector('.c43').innerText = `${link[5].points}`;
    document.querySelector('.c23').innerHTML = `<img src="${link[5].avatar}">`;  

    document.querySelector('.c34').innerText = `${link[6].name}`; 
    document.querySelector('.c44').innerText = `${link[6].points}`;
    document.querySelector('.c24').innerHTML = `<img src="${link[6].avatar}">`;  

    document.querySelector('.c35').innerText = `${link[7].name}`; 
    document.querySelector('.c45').innerText = `${link[7].points}`;
    document.querySelector('.c25').innerHTML = `<img src="${link[7].avatar}">`;  


})