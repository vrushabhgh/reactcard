
import './App.css';
import Card from './fan'

function App() {
  let valuedata=[
    {    plan:"FREE",
        currency:"$",
        price:"0",
        period:"month",
        offer:[{
          name:"Single User",
          isEnable:true

        },
        {
          name:"5GB Storage",
          isEnable:true
        },
        {
          name:"Unlimited Public Projects",
          isEnable:true
        },
        {
          name:"Community Access",
          isEnable:true
        },
        {
          name:"Unlimited Private Projects",
          isEnable:false
        },
        {
          name:"Dedicated Phone Support",
          isEnable:false
        },
        {
          name:"Free Subdomain",
          isEnable:false
        },
        {
          name:"Monthly Status Reports",
          isEnable:false
        }
      ]

    },
    {
      plan:"PLUS",
      currency:"$",
      price:9,
      period:"month",
      offer:[{
        name:"5 User",
        isEnable:true

      },
      {
        name:"50GB Storage",
        isEnable:true
      },
      {
        name:"Unlimited Public Projects",
        isEnable:true
      },
      {
        name:"Community Access",
        isEnable:true
      },
      {
        name:"Unlimited Private Projects",
        isEnable:true
      },
      {
        name:"Dedicated Phone Support",
        isEnable:true
      },
      {
        name:"Free Subdomain",
        isEnable:true
      },
      {
        name:"Monthly Status Reports",
        isEnable:false
      }
    ]
    },
    {
      plan:"PRO",
      currency:"$",
      price:49,
      period:"month",
      offer:[
        {
        name:"Unlimited  User",
        isEnable:true

      },
      {
        name:"150GB Storage",
        isEnable:true
      },
      {
        name:"Unlimited Public Projects",
        isEnable:true
      },
      {
        name:"Community Access",
        isEnable:true
      },
      {
        name:"Unlimited Private Projects",
        isEnable:true
      },
      {
        name:"Dedicated Phone Support",
        isEnable:true
      },
      {
        name:"Free Subdomain",
        isEnable:true
      },
      {
        name:"Monthly Status Reports",
        isEnable:true
      }
    ]
    },
  ]
  return (<>
  <section className="pricing py-5">
  <div className="container">
  <div className="row">
   {
     valuedata.map((obj)=>
     {
       return <Card data={obj}></Card>
     })
   }
  </div>
  </div>
  </section>
  
   </>
  );
}

export default App;
