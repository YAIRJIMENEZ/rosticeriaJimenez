import React from 'react'
import './footer.css'

export const Footer = () => {
    return (
        <footer>
            <div className="footer">
               <div>
                   Dirección: Carretera a calvillo km 17
               </div>
               <div>
                   (A un costado de la entrada a venadero)
               </div>
               <div className="left">
                   <ul>
                       <li>
                           <div className="left">
                            <img src='/assets/images/whatsapp.png'></img>
                            <a href='https://wa.me/524493475716' target="_blank">4493475716</a>
                          </div>
                       </li>
                       <li>
                            <div className="left">
                             <img src='/assets/images/facebook.png'></img>
                             <a href='https://www.facebook.com/rosticeriaycarniceriajimenez' target="_blank">@rosticeriaycarniceriajimenez</a>
                             </div>
                       </li>
                   </ul>
               </div>
               <div className="rigth">
                   <div className="Recomendacion">
                   <p >Recomendaciones:
                   Gorditas y Carnitas SanMiguel
                   Carretera a Calvillo Km. 17
                  
                   (Enfrente de la gas de venadero)
                   
                   </p>
                  
                   </div>
                  
               </div>
            </div>
        </footer>
    )
}
