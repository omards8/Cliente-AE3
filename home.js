function fase0() {
    let a = document.getElementById("uno");
    let b = document.getElementById("dos");
    let c = document.getElementById("tres");
    a.style.display = "block";    
    b.style.display = "none";
    c.style.display = "none";   
} 
function fase1() {
    let url = (document.getElementById("url").value);
    let a = document.getElementById("uno");
    let b = document.getElementById("dos");
    let c = document.getElementById("tres");
    if(url.length > 0){
        a.style.display = "none";
        b.style.display = "block";
        c.style.display = "none"; 
    }     
} 
function fase2() {  
    let b = document.getElementById("dos");
    let c = document.getElementById("tres");
    let cont = document.getElementById("contenedor");
    b.style.display = "none";
    c.style.display = "block"; 
    if (document.getElementById('contenedor')) {
            let nom = document.getElementById("2nom").value;
            let fec = document.getElementById("2fec").value;
            let dir = document.getElementById("2dir").value;
            let pos = document.getElementById("2pos").value;
            let pro = document.getElementById("selpro");
            let selPro = pro.options[pro.selectedIndex].value;
            let mun = document.getElementById("2mun").value.toUpperCase();
            document.getElementById('contenedor').style.display = "block";
            if(nom.length < 1){
                const errNom = document.createElement('p');
                errNom.textContent = "¡El NOMBRE no es válido!";
                errNom.style.backgroundColor = "grey";
                errNom.style.color = "red";
                errNom.style.border = "1px solid #ff4d4d" ;
                document.getElementById('contenedor').appendChild(errNom);
            }  
            if(fec.length < 1){
                const errFec = document.createElement('p');
                errFec.textContent = "¡La FECHA no es válida!";
                errFec.style.backgroundColor = "grey";
                errFec.style.color = "red";
                errFec.style.border = "1px solid #ff4d4d" ;
                document.getElementById('contenedor').appendChild(errFec);
            }
            if(pos.length < 5){
                const errPos = document.createElement('p');
                errPos.textContent = "¡El CÓDIGO POSTAL no es válido!";
                errPos.style.backgroundColor = "grey";
                errPos.style.color = "red";
                errPos.style.border = "1px solid #ff4d4d" ;
                document.getElementById('contenedor').appendChild(errPos);
            }
            if(mun.length < 1){
                const errMun = document.createElement('p');
                errMun.textContent = "¡El MUNCIPIO no es válido!";
                errMun.style.backgroundColor = "grey";
                errMun.style.color = "red";
                errMun.style.border = "1px solid #ff4d4d" ;
                document.getElementById('contenedor').appendChild(errMun);
            }
            const etiNom = document.createTextNode('NOMBRE: ');
            document.getElementById('contenedor').appendChild(etiNom);
            const name = document.createElement('p');
            name.textContent = nom;
            document.getElementById('contenedor').appendChild(name);
            if(nom.length < 1){
                const errNom = document.createElement('p');
                errNom.textContent = "¡El NOMBRE no es válido!";
                errNom.style.backgroundColor = "grey";
                errNom.style.color = "red";
                errNom.style.border = "1px solid #ff4d4d" ;
                document.getElementById('contenedor').appendChild(errNom);
            } 
            const etiFec = document.createTextNode('FECHA: ');
            document.getElementById('contenedor').appendChild(etiFec);
            const date = document.createElement('p');
            date.textContent = fec;
            document.getElementById('contenedor').appendChild(date);
            if(fec.length < 1){
                const errFec = document.createElement('p');
                errFec.textContent = "¡La FECHA no es válida!";
                errFec.style.backgroundColor = "grey";
                errFec.style.color = "red";
                errFec.style.border = "1px solid #ff4d4d" ;
                document.getElementById('contenedor').appendChild(errFec);
            }
            const etiDir = document.createTextNode('DIRECCIÓN: ');
            document.getElementById('contenedor').appendChild(etiDir);
            const dire = document.createElement('p');
            dire.textContent = dir;
            document.getElementById('contenedor').appendChild(dire);
            const etiPos = document.createTextNode('CÓDIGO POSTAL: ');
            document.getElementById('contenedor').appendChild(etiPos);
            const post = document.createElement('p');
            post.textContent = pos;
            document.getElementById('contenedor').appendChild(post);
            if(pos.length < 5){
                const errPos = document.createElement('p');
                errPos.textContent = "¡El CÓDIGO POSTAL no es válido!";
                errPos.style.backgroundColor = "grey";
                errPos.style.color = "red";
                errPos.style.border = "1px solid #ff4d4d" ;
                document.getElementById('contenedor').appendChild(errPos);
            }
            const etiPro = document.createTextNode('PROVINCIA: ');
            document.getElementById('contenedor').appendChild(etiPro);
            const prov = document.createElement('p');
            prov.textContent = selPro;
            document.getElementById('contenedor').appendChild(prov);
            const etiMun = document.createTextNode('MUNICIPIO: ');
            document.getElementById('contenedor').appendChild(etiMun);
            const muni = document.createElement('p');
            muni.textContent = mun;
            document.getElementById('contenedor').appendChild(muni);
            if(mun.length < 1){
                const errMun = document.createElement('p');
                errMun.textContent = "¡El MUNICIPIO no es válido!";
                errMun.style.backgroundColor = "grey";
                errMun.style.color = "red";
                errMun.style.border = "1px solid #ff4d4d" ;
                document.getElementById('contenedor').appendChild(errMun);
            }     
    } else {
            const container = document.createElement('div');
            document.body.appendChild(container);
            container.setAttribute("id","contenedor");
            let nom = document.getElementById("2nom").value;
            let fec = document.getElementById("2fec").value;
            let dir = document.getElementById("2dir").value;
            let pos = document.getElementById("2pos").value;
            let pro = document.getElementById("selpro");
            let selPro = pro.options[pro.selectedIndex].value;
            let mun = document.getElementById("2mun").value.toUpperCase();
            if(nom.length < 1){
                const errNom = document.createElement('p');
                errNom.textContent = "¡El NOMBRE no es válido!";
                errNom.style.backgroundColor = "grey";
                errNom.style.color = "red";
                errNom.style.border = "1px solid #ff4d4d" ;
                container.appendChild(errNom);
            }  
            if(fec.length < 1){
                const errFec = document.createElement('p');
                errFec.textContent = "¡La FECHA no es válida!";
                errFec.style.backgroundColor = "grey";
                errFec.style.color = "red";
                errFec.style.border = "1px solid #ff4d4d" ;
                container.appendChild(errFec);
            }
            if(pos.length < 5){
                const errPos = document.createElement('p');
                errPos.textContent = "¡El CÓDIGO POSTAL no es válido!";
                errPos.style.backgroundColor = "grey";
                errPos.style.color = "red";
                errPos.style.border = "1px solid #ff4d4d" ;
                container.appendChild(errPos);
            }
            if(mun.length < 1){
                const errMun = document.createElement('p');
                errMun.textContent = "¡El MUNICIPIO no es válido!";
                errMun.style.backgroundColor = "grey";
                errMun.style.color = "red";
                errMun.style.border = "1px solid #ff4d4d" ;
                container.appendChild(errMun);
            }
            const etiNom = document.createTextNode('NOMBRE: ');
            container.appendChild(etiNom);
            const name = document.createElement('p');
            name.textContent = nom;
            container.appendChild(name);
            if(nom.length < 1){
                const errNom = document.createElement('p');
                errNom.textContent = "¡El NOMBRE no es válido!";
                errNom.style.backgroundColor = "grey";
                errNom.style.color = "red";
                errNom.style.border = "1px solid #ff4d4d" ;
                container.appendChild(errNom);
            } 
            const etiFec = document.createTextNode('FECHA: ');
            container.appendChild(etiFec);
            const date = document.createElement('p');
            date.textContent = fec;
            container.appendChild(date);
            if(fec.length < 1){
                const errFec = document.createElement('p');
                errFec.textContent = "¡La FECHA no es válida!";
                errFec.style.backgroundColor = "grey";
                errFec.style.color = "red";
                errFec.style.border = "1px solid #ff4d4d" ;
                container.appendChild(errFec);
            }
            const etiDir = document.createTextNode('DIRECCIÓN: ');
            container.appendChild(etiDir);
            const dire = document.createElement('p');
            dire.textContent = dir;
            container.appendChild(dire);
            const etiPos = document.createTextNode('CÓDIGO POSTAL: ');
            container.appendChild(etiPos);
            const post = document.createElement('p');
            post.textContent = pos;
            container.appendChild(post);
            if(pos.length < 5){
                const errPos = document.createElement('p');
                errPos.textContent = "¡El CÓDIGO POSTAL no es válido!";
                errPos.style.backgroundColor = "grey";
                errPos.style.color = "red";
                errPos.style.border = "1px solid #ff4d4d" ;
                container.appendChild(errPos);
            }
            const etiPro = document.createTextNode('PROVINCIA: ');
            container.appendChild(etiPro);
            const prov = document.createElement('p');
            prov.textContent = selPro;
            container.appendChild(prov);
            const etiMun = document.createTextNode('MUNICIPIO: ');
            container.appendChild(etiMun);
            const muni = document.createElement('p');
            muni.textContent = mun;
            container.appendChild(muni);
            if(mun.length < 1){
                const errMun = document.createElement('p');
                errMun.textContent = "¡El MUNICIPIO no es válido!";
                errMun.style.backgroundColor = "grey";
                errMun.style.color = "red";
                errMun.style.border = "1px solid #ff4d4d" ;
                container.appendChild(errMun);
            }   
    }   
} 
function fase4() {
    let x = document.getElementById("contenedor");
    let b = document.getElementById("dos");
    let c = document.getElementById("tres");
    b.style.display = "block";
    c.style.display = "none";  
    x.style.display = "none";  
    document.body.removeChild(contenedor);  
} 
function fase5() {
    let x = document.getElementById("contenedor");
    let b = document.getElementById("dos");
    let c = document.getElementById("tres");
    let d = document.getElementById("cuatro");
    let url = document.getElementById("url").value;
    b.style.display = "none";
    c.style.display = "none";  
    x.style.display = "none";  
    d.style.display = "block";     
    document.getElementById("term").onclick = function () {
    location.href = url;
    };
} 
function fase6() {
    let x = document.getElementById("contenedor");
    let b = document.getElementById("dos");
    let c = document.getElementById("tres");
    let d = document.getElementById("cuatro");
    let url = document.getElementById("url").value;
    let nom = document.getElementById("2nom").value;
    let fec = document.getElementById("2fec").value;
    let dir = document.getElementById("2dir").value;
    let pos = document.getElementById("2pos").value;
    let pro = document.getElementById("selpro");
    let selPro = pro.options[pro.selectedIndex].value;
    let mun = document.getElementById("2mun").value.toUpperCase();
    c.style.display = "none";  
    x.style.display = "none";  
    if(nom.length < 1 || fec.length < 1 || pos.length < 5 || pro.length < 1 || mun.length < 1){
        b.style.display = "block";
        document.body.removeChild(contenedor);
    } else {
        d.style.display = "block"; 
    }
}     