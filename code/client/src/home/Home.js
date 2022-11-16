import './Home.css';
import image from '../images/image_test.png'
import image2 from '../images/image_test2.png'
import image3 from '../images/image_test3.png'
import image4 from '../images/image_test4.png'
import image5 from '../images/image_test5.png'
import fleche from '../images/fleche.png'

export default function Home() {
    return (

    <section class="home container">
        <a href="" class="article_une">
            <h1 class="titre">Practice Is Everything: The Mindset Behind Superhero Workouts</h1>
            <img class="img" src={image} alt="" />
            <span class="desc"> If you are serious about accomplishing big things in the pool you need to rethink the way you train. Here is why practice is everything.</span>
        </a>

        <div class="dernier_articles">
            <div class="div_titre_last"> <img class="titre_img" src={fleche} alt="" /><h2 class="titre">Last articles : </h2> </div>
            <a href="" class="article">
                <img src={image2} alt="" />
                <div class="desc">
                    <span class="titre">The Top 6 Core Exercises for Swimmers</span>
                    <span>Having a powerful core will make you a better, stronger swimmer. </span>
                </div>
            </a>

            <a href="" class="article">
                <img src={image3} alt="" />
                <div class="desc">
                    <span class="titre">How to Swim Faster Freestyle</span>
                    <span>Ready to take your freestyle to the next level?</span>
                </div>            </a>

            <a href="" class="article">
                <img src={image4} alt="" />
                <div class="desc">
                    <span class="titre">Butterfly Sets: How to Dominate Your Next 100m Butterfly</span>
                    <span>“You gotta go out fast, and come back faster!” is one of those lines ...</span>
                </div>            </a>

            <a href="" class="article">
                <img src={image5} alt="" />
                <div class="desc">
                    <span class="titre">This is How Fast Katie Ledecky Swims.</span>
                    <span>You already know that Katie Ledecky is the top female swimmer ...</span>
                </div>            </a>
        </div>

        <div class="categories">
            <div class="div_titre_last"> <img class="titre_img" src={fleche} alt="" /><h2 class="titre">Categories : </h2> </div>

            <div class="div_cat">
                
                <a href="" class="cat1">
                    News
                </a>

                <a href="" class="cat2">
                    How to swim ?
                </a>

                <a href="" class="cat3">
                    discover our tips for better swimming
                </a>

                <a href="" class="cat4">
                    Comptetitions
                </a>

                <a href="" class="cat5">
                    World records
                </a>

                <a href="" class="cat6">
                    Athlets
                </a>
                
                <a href="" class="cat7">
                    Awards
                </a>

                <a href="" class="cat">
                    Best men swimming
                </a>

                <a href="" class="cat">
                    Best women swimming
                </a>
            </div>

        </div>

    </section>

    );
}


