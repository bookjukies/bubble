  //creating the class for the custom element
  /*
    The all the sorces(src) must point to index pages reletive position
    if you choose to move the videos and the icons youll have to use the path in relation to the index page
  */
  class MyBubble extends HTMLElement {
      connectedCallback(){
          this.innerHTML=`
          <!-- The html for the components -->

          <!--ACTIVE VIDEO STATE-->
            <div class="bubble_open_ none_">
                <div>

                <!-- VIDEO CONTROLS -->
                    <div class="controls_ ">
                        <div class="left_">
                        
                            <img id="pause_" class="icon_" src="./pause.png" alt="pause">
                            <img id="play_" class="icon_ none_" src="./play.png" alt="play">
                            <img id="refresh_" class=" icon_" src="./refresh.png" alt="refresh">
                            <img id="volume_" class=" icon_ none_" src="./volume.png" alt="volume">
                            <img id="mute_" class=" icon_ " src="./mute.png" alt="mute">
                            <img id="close_" class="icon_" src="./close.png" alt="close">
                        </div>
                    </div>
                <!-- CONTROLS END -->


                <!-- VIDEO SORCER -->
                    <video muted autoplay loop class="video_ open_">
                        <source src="./test.mp4" type="video/mp4" />
                    </video>
                <!--VIDEO SORCE END -->
                   
                <!--CALL TO ACTION BUTTON-->
                    <a class="started_ down_" href="#"><span><img class="shuffle_" src="./shuffle.png" alt="get started">GET
                            STARTED</span></a>
                </div>
                <!--CALL TO ACTION BUTTON... END--> 
            </div>
        <!--ACTIVE VIDEO STATE... END-->
            
         <!--VIDEO BUBBLE-->
            <div class="bubble_">
                <div class="container_">
                          <!--TEXT NEXT TO VIDEO-->
                    <div class="words_ fixed_">Hey! Click Here 👉</div>

        <!--VIDEO SOURCR-->
                        <video muted autoplay loop class="video_ circle_ fixed_">
                            <source src="./test.mp4" type="video/mp4" />
                        </video>

        <!--CLOSE BUTTON-->
                    <div class="close_ fixed_"><img class="close_btn_" src="./outer.png" alt="close"></div>
                 <!--CLOSE BUTTON END-->
                </div>
            </div>
          `
      }
  }

  customElements.define(`my-bubble`,MyBubble)
