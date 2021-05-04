export default function Card(props){
    return <>
     <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
            <h6 className="card-price text-center">{props.data.currency}{props.data.price}<span class="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">

                {
                    props.data.offer.map((offe)=>{
                        return  <li className={offe.isEnable ?"" :"text-muted"}><span className="fa-li"><i className={`fas ${offe.isEnable ? 'fa-check':'fa-times'}`}></i></span>{offe.name}</li>
                    })
                }
              
            </ul>
            <a className="btn btn-block btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </>
    
}