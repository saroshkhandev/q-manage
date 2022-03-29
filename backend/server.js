const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

var admin = require("firebase-admin");
var serviceAccount = require("./key.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  const db=admin.firestore();

//api to signup new user
app.post("/signup", async(req,res)=>{
    
    let docRef=db.collection('user').doc('Ritik')
        await docRef.set({
        email: req.body.email,
        password: req.body.password,
});
res.json(200, {success: true})
})

//api to fetch all products
app.get("/allprod", async(req,res)=>{
        let usr=[]
        const products = await db.collection('products').get()
        for (const user of products.docs) {
            usr.push(user.data())
         }
        res.status(200).json({
            success: true,
            usr
        })
})

app.get("/customers", async(req,res)=>{
    let usr=[]
    const users = await db.collection('users').get()
    for (const user of users.docs) {
        usr.push(user.data())
     }
    res.status(200).json({
        success: true,
        usr
    })
})
app.get("/sales", async(req,res)=>{
    let sales=[]
    const users = await db.collection('total sales').get()
    for (const user of users.docs) {
        sales.push(user.data())
     }
    res.status(200).json({
        success: true,
        sales
    })
})
//api to create new product 
app.post("/newprod", async(req,res)=>{
    const {id, name, price} = req.body;

try{
    let docRef = db.collection('products').doc(id)
    await docRef.create({
        prod_id: id, 
        prod_name: name,
        prod_price: price
    });
}
catch{
    res.status(400).json({err});
}

    res.status(200).json({
        success: true
    })
})

app.delete("/delprod", async(req, res) => {
    let id = req.body.id
    await db.collection('products').doc(id).delete()

    res.status(200).json({success: true})
})

app.listen(4000, ()=>{
    console.log("Up & Running on 4000")
})
