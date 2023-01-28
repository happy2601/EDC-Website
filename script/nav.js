function nav(){
    const nav=document.querySelector(".link");
    if(nav.style.left=="-100vw" || nav.style.left=="")
    {
        nav.style.left="0vw";
        document.getElementById('coverAll').style.display = 'block';
    }
    else
    {
        document.getElementById('coverAll').style.display = 'none';
        nav.style.left="-100vw";
    }

}