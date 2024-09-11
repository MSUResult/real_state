import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>

           

            Transform real estate with this modern, mobile-friendly platform featuring real-time property listings, advanced search filters, and 360° virtual tours. Users can save searches, schedule viewings, and access built-in mortgage calculators for seamless property browsing. Perfect for agents or agencies looking to streamline their services with cutting-edge technology.


          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +761 855 0475</span>
          <span>Freelencer: Shivansh Singh</span>
          <span>GitHub: Shiv</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Asia</span>
          <span>Country: India</span>
          <span>Current Location: saharnpur</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer