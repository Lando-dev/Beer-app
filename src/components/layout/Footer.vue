<template>
  <footer class="site-footer">
    <div class="footer">
      <div class="footer__about">
        <h6>About</h6>
        <p>Beer is one of the oldest and most widely consumed alcoholic drinks in the world, and the third most popular drink overall after water and tea. Beer is brewed from cereal grains—most commonly from malted barley, though wheat, maize (corn), and rice are also used. During the brewing process, fermentation of the starch sugars in the wort produces ethanol and carbonation in the resulting beer.</p>
      </div>

      <div class="footer__categories">
        <h6>Quick Links</h6>
        <ul class="footer-links">
          <li><router-link to="/categories">Categories</router-link></li>
          <li><router-link to="/random">Surprise Me</router-link></li>
          <li><a href="">Beer</a></li>
        </ul>
      </div>

      <div class="footer__links">
        <h6>Contact</h6>
        <ul class="footer-links">
          <li>849  Cunningham Court</li>
          <li>Westland</li>
          <li>248-640-1183</li>
          <li>q1d8xf9fsce@temporary-mail.net</li>
          <li></li>
        </ul>
      </div>
      <hr>
      <div class="footer__copyright">
        <div class="">
          <p class="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
          <a href="www.fabiogirlando.com">Fabio Girlando</a>.
          </p>
        </div>
      </div>
      <div class="footer__icons">
        <ul class="social-icons">
          <li><a class="social-icons--facebook" href="#"><i class="fab fa-facebook-f"></i></a></li>
          <li><a class="social-icons--twitter" href="#"><i class="fab fa-twitter"></i></a></li>
          <li><a class="social-icons--dribbble" href="#"><i class="fab fa-instagram"></i></a></li>
          <li><a class="social-icons--linkedin" href="#"><i class="fab fa-linkedin-in"></i></a></li>   
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Footer extends Vue {}

</script>