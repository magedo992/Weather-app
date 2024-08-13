const express=require('express');
const app=express();
const axios=require('axios');
const cors=require('cors');
const path=require('path');

app.use(cors());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/',(req,res)=>{
    res.render('index.ejs');
})

app.get('/weather/:city',async (req,res)=>{
    const city=req.params.city;
    
    

    const apiKey='632b29c888f900ae617f0a99e528606c';
    const resopnse=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    //console.log(resopnse);
  
    res.json(resopnse.data)
})

app.listen(3000,()=>{


console.log('hosted on port 3000');

    
})
