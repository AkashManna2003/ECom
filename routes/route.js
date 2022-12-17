const express = require("express");
//const app=express();
const router = express.Router();
const Posts= require("../model/model2");
const Note=require("../model/model1");
const Carts=require("../model/model3");
const Admins=require("../model/model4");
let UsernameAU="";
let UsernameAUD="";

         ///////////////////////////////////////////LOGIN REGISTRATION PART /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// app.get("/posts",(req,res)=>{
//     res.send("We are on post");
// });

router.route("/found").get((req,res)=>{   //finding usernames already in db
    Posts.find({})
        .then(foundNotes => res.json(foundNotes))
        
        
  })

router.post("/register", async (req,res)=>{    //username entry
        const title=req.body.username;
        const content=req.body.password;

        console.log("from route:  "+ title+" ,,, "+ content);
        const post= new Posts({
            Username: title,
            password: content,
            username: title
    });
    console.log(post);
    post.save();
    //  (err, data) => {
    //     console.log('Analyzing Data...');
    //     if(data) {
    //         console.log('Your data has been successfully saved.');
    //         res.json(data);
    //     }
    //     else {
    //       console.log('Something went wrong while saving data.');
    //       console.log(err);
    //       res.send(err);
    //     }
    // });

});
router.post("/Auth", async (req,res)=>{ // sending data from login page to register
  console.log("auth   " + req.body.username);
  UsernameAU=req.body.username;
});
router.route("/authz").get((req,res)=>{
 return(UsernameAUD);
 });

///////admin login//////////////////////////////////////
router.route("/foundad").get((req,res)=>{   //finding usernames already in db
  Admins.find({})
      .then(foundNotes => res.json(foundNotes))
})

router.post("/Authad", async (req,res)=>{ // sending data from login page to register
  console.log("auth admin   " + req.body.username);
  UsernameAU=req.body.username;
});

         /////////////////////////////////////////// NOTE MAKING PART ///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.route("/note").post((req,res)=>{ //location list making
  console.log(req.body);
    const title=req.body.title;
    const content=req.body.content;
    const url=req.body.url;
    const price= req.body.price;
    const cont=req.body.cont;
    const id=req.body.id;
    console.log("from route"+ title+" ,,, "+ content+"  ,,,,   ,,,   "+url);
    
    const newNote= new Note({
      title: title,
      content: content,
      cont: cont,
      id: id,
      price: price,
      cont: cont,
      url: url
    });
  
    newNote.save();
    
  })
 
  router.route("/poost").get((req,res)=>{   //notes finding
    Note.find()
        .then(foundNotes => res.json(foundNotes))   
  })
  // router.route("/User").get((req,res)=>{   //notes finding
  //   UsernameAU.then(foundNotes => res.json(foundNotes))   
  // })

  // router.post("/del",(req,res)=>{   //notes deleting
    
  //   const title=req.body._id;
    
  //   Note.deleteOne({_id: title}).then(() => res.set(201).send("Deleted Successfully..."))
  //   .catch((err) => console.log(err));;       
  // })




  //////////////////////////////////////////////////////////cart

  router.route("/cartz").get((req,res)=>{   //cart item finding
    Carts.find({username: UsernameAU})
        .then(foundNotes => res.json(foundNotes))   
  })
  router.route("/cartpost").post((req,res)=>{
    const username=UsernameAU;
    const id= req.body.id;
    const title=req.body.title;
    const price=req.body.price;
    const img=req.body.img;
    const newNote= new Carts({
      username: username,
      id: id,
      title: title,
      price: price,
      img: img
    });
    console.log("ADDED TO CART"+ username+",,,"+id+",,,"+title+",,,"+price+",,,"+img)
    newNote.save();
  })
  router.post("/del",(req,res)=>{   //notes deleting
    
    const id=req.body.id;
   
    
    Carts.deleteOne({id:id},{username:UsernameAU}).then(() => res.set(201).send("Deleted Successfully..."))
    .catch((err) => console.log(err));;
        
        
  })
module.exports=router;