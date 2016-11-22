var express = require('express')
var app = express()
var request = require('superagent')
require('dotenv').config();

// request
//   .post('https://sandbox1455.nationbuilder.com/api/v1/sites/sandbox1455/pages/blogs?access_token='+ process.env.access_token)
//   .send({
//         "blog": {
//           "name": "test blog",
//           "status": "published"
//       }
//     })
//     .set('Content-Type', 'application/json')
//     .accept('application/json')
//     .end(function(err, data) {
//       if (err) {
//         console.log("ERROR HERE: ", err)
//       } else {
//       console.log("INFO HERE: ", data.body)
//     }
//     })




// request
//   .post('https://sandbox1455.nationbuilder.com/api/v1/sites/sandbox1455/pages/blogs/10/posts?access_token='+ process.env.access_token)
//   .send({
//     "blog_post": {
//     "id": 10,
//     "name": "News100",
//     "status": "published",
//     "content": "This is about the latest news on page 100. Interested? Share it with your friends.",
//     "content_full": "Lorem ipsum dolor sit amet, ius ornatus molestie te, errem fierent ad mel. Ad debet timeam his, tibique delectus no nam. Pro meis quaestio ullamcorper ea, et sit ullum convenire, sit no vocent constituto. Eleifend delicatissimi cu sit, labores voluptua mei an. Veri periculis constituam id sit.\r\rAffert regione in mea, ea quo dicam dissentiunt. Omnesque reprimique intellegam has ea. Vel et choro appetere. Ad ferri feugait conceptam nec, ut sed iuvaret volumus. Vix no simul legimus senserit, his cu atqui omnium aliquid, cu mel illud porro detracto.\r\rPri vide ludus affert ut. Sit clita perpetua id, no decore ubique dissentiet quo. Qui ea aliquid fuisset deterruisset. Vel magna prima ut. Intellegat quaerendum qui at.\r\rPrompta ullamcorper ius ei. Per utamur equidem admodum ex, referrentur comprehensam eos ut, an quo quem albucius. Mei graeco apeirian neglegentur no. Soleat eleifend ex cum, no mea ferri habemus.\r\rPri epicurei fabellas no. Euripidis suscipiantur id qui, sed cibo tincidunt eu. Partem feugiat nec no, te diceret voluptua referrentur pro. Cu congue splendide mei, cu legere iriure commune nec. Amet inani incorrupte ei duo, an error nonumy mediocritatem eos. Elitr detracto mei an, prima etiam vix cu, ea eos congue scripserit.\r\rEi ius dictas debitis minimum. His te elitr delicata quaerendum, est volutpat explicari assentior no, eos alii aliquid tractatos ea. Ipsum efficiendi at vix, nec ipsum labore praesent te. Pro id aeque suavitate, porro etiam detraxit ne mel, usu duis primis regione at.\r\rAn vix rebum scripta persius. Has nonumes singulis id, nam ea vidisse repudiare consequuntur. An dicant ignota est, ea ius graeci diceret, esse posse patrioque est at. Ex labore aperiri probatus mel, cibo fastidii ad usu. Mei essent alterum perpetua et. Qui everti argumentum in, in quo viderer instructior.\r\rNo vim perfecto consectetuer, vis ex utamur efficiendi. Minim veniam senserit te pri, te rebum summo suavitate qui, ex maiorum partiendo nam. Ut quo dolore graeco, et aliquip aliquam sea, ex has elitr ornatus corrumpit. Mea ex labores recteque vituperata, ad nec movet aliquip, reprehendunt mediocritatem no eam. Blandit contentiones ea mea.\r\rAffert epicuri adipisci sea ne. Rebum nihil scribentur qui ut, no vis habemus appetere. Ex etiam nobis alterum est, te pertinax inimicus vel. Pri possit ocurreret ut.\r\rTation vituperata signiferumque ut pri, ad accusam scripserit contentiones eam, nam virtute hendrerit eu. Nam ne falli mandamus, ex sit choro ponderum tincidunt, qui prima epicurei ei. Eu quod reprimique vim, ut iudico labores ancillae per. Eu percipit disputando usu, quidam bonorum forensibus ei duo. Est ex minimum molestiae.",
//     "headline ": "News Today",
//     "type_name": "blog_post",
//     "author": "Lizzie Sullivan"
//       }
//     })
//     .set('Content-Type', 'application/json')
//     .accept('application/json')
//     .end(function(err, data) {
//       if (err) {
//         console.log("ERROR HERE: ", err)
//       } else {
//       console.log("INFO HERE: ", data.body)
//     }
//     })

    request
      .post('https://kristingillies.nationbuilder.com/api/v1/people?access_token=' + process.env.access_token)
      .set('Accept', 'application/json')
      .send({
      "person": {
        "email": "lizzo@test.com",
        "last_name": "Chang",
        "first_name": "Over",
        "sex": "M",
        "employer": "Headaches-R-us",
      }
    })
      .end(function(err, res){
        if (err) {
          console.log("I'm sorry, there's been an error creating a person: ", err)
        } else {
          console.log("success: ", res)
        }
      })






app.get('/', function (req, res) {
  res.send('Listening on 8080!')
})

app.listen(8080)

//https://sandbox1455.nationbuilder.com/api/v1/sites/sandbox1455/pages/blogs/10/posts


// //Converter Class
// var Converter = require("csvtojson").Converter;
// var converter = new Converter({});
// converter.fromFile("./testDataCSVtoJSON.csv",function(err,result){
//
// });
