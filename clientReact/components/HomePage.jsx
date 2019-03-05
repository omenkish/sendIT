import React from 'react';
import SectionCard from '../components/indexPartials/Card';
import styles from '../assets/css/index.css';

const HomePage = () => (
  <div>
    <section id={styles.showcase}>
    <div className={styles.container}>
        <h1> Affordable Parcel Delivery worldwide</h1>
        <p><i>Send it.....with convenience!</i></p>
      </div>
    </section>
    <section id={styles.search}>
      <div className={styles.container}>
        <h3>Search for an order</h3>
        <form>
          <input type="search" placeholder="Enter Order number ...."/>
          <button type="submit" className={styles.button1}>search</button>
        </form>
      </div>
    </section>
    <section id={styles.boxes}>
    <div className={styles.container}>
      <SectionCard  
        src ={require("../../client/assets/images/final.jpg")}
        title = 'World Wide Service'
        text = 'With our various stations worldwide, we reach you at any part of the globe. You are just a click away from enjoying our\
        world className services.'
      />
      <SectionCard  
        src ={require("../../client/assets/images/back.jpg")}
        title = 'Express Delivery'
        text = 'Why not send it....With convenience.'
      />
      <SectionCard  
        src ={require("../../client/assets/images/world.jpg")}
        title = 'HTML5 Styling'
        text = 'This is a dummy text. It depends on how you wish to define the term dummy but i bet even a child knows what it is and how to use it.'
      />
    </div>
  </section>

  </div>
);
export default HomePage;