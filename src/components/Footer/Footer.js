import styles from './Footer.module.scss'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.adress}>
                <h3>Our address</h3>
                <h4>Sweden</h4>
                <h4>Stockholm</h4>
                
            </div>
           
            <div className={styles.logo}></div>
            <div className={styles.newsLetter}>
                <h3>Contact us</h3>
                <p>
                    Do you want to recieve our sugested recipe?
                 </p>
                 <p>   
                    Sign up for our newsletter here! 
                   
                </p>
                <input type="text" placeholder="name@mail.com" />
                <button className={styles.footerBtn} mailto="mailto:sara.msedaghat@gmail.com" >Subscribe</button>
            </div>
        </div>
    )
}

export default Footer
