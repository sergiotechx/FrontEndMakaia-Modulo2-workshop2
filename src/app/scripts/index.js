import '../styles/style.scss';
import snapImage from '../../images/logo.svg';
import databizImage from '../../images/client-databiz.svg';
import audiophileImage from '../../images/client-audiophile.svg';
import meetImage from '../../images/client-meet.svg';
import makerImage from '../../images/client-maker.svg';
import heroDesktop from '../../images/image-hero-desktop.png';
import heroMobile from '../../images/image-hero-mobile.png';
let htmlDocument = document.querySelector('.app');
let htmlTemplate= `

 <div class='navBar'>
     <sl-icon-button name="x-circle" label="Settings"></sl-icon-button>
     <div class=section1>
         
             <img src=${snapImage}/>
         
         <sl-dropdown>
                <sl-button slot="trigger" caret variant="text" >Features</sl-button>
                <sl-menu>
                    <sl-menu-item>
                        Todo list
                        <sl-icon slot="prefix" name="list-task" style="color:#7973F6;"></sl-icon>
                    </sl-menu-item>
                    <sl-menu-item>
                        Calendar
                        <sl-icon slot="prefix" name="calendar-event" style="color:#58AECE;"></sl-icon>
                    </sl-menu-item>
                    <sl-menu-item>
                        Reminders
                        <sl-icon slot="prefix" name="bell" style="color:#EFD84D;"></sl-icon>
                    </sl-menu-item>
                    <sl-menu-item>
                        Planning
                        <sl-icon slot="prefix" name="clock"style="color:#9255BB;"></sl-icon>
                    </sl-menu-item>
                </sl-menu>
            </sl-dropdown>
    <sl-dropdown>
       <sl-button slot="trigger" caret variant="text" >Features</sl-button>
       <sl-menu>
            <sl-menu-item>
                History
            </sl-menu-item>
            <sl-menu-item>
                Our team
            </sl-menu-item>
            <sl-menu-item>
               Blog
            </sl-menu-item>
        </sl-menu>
    </sl-dropdown>
    <a href="">Careers</a>
    <a href="">About</a>
  </div>
  <div class=section2>
    <a  href="#">Login</a>
    <button>Register</button>
  </div>
 </div>
 <div class='main'>
 <section>
      
         <h1>Make </h1>
         <h1>remote work</h1>
     
      <p> 
      get your tea in sync, no matter your location.
      Stramline process,create team rituals, and watch productivity soar.  
    </p>
    <button>Learn more</button>
                <footer>
                 <img src =${databizImage}>
                <img src =${audiophileImage}>
                <img src =${meetImage}>
                <img src =${makerImage}>
            </footer>

 </section>
 <div class='logo'>
     <img src=${heroDesktop}>
  </div>
 </div>
`;
htmlDocument.innerHTML= htmlTemplate;

