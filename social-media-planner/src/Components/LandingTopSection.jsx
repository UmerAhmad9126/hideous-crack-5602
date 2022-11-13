import React from 'react'
import "../Style/LandingTopSection.css"
import img from "../Components/rct-img.png"

const LandingTopSection = () => {
  return (
    <div>

      <div id='LandingTopSection'>
        <div id='left-top-section'>
          <div id='left-child'>
            <div><h1>Grow your audience on social and beyond</h1></div>
            <div><p>Buffer helps you build an audience organically. We’re a values-driven company that provides affordable, intuitive, marketing tools for ambitious people and teams.</p></div>
            <div id='left-btn'>
              <button>Get Started Now</button>
              <button>Watch Video</button>
            </div>
          </div>
        </div>
        <div id='right-top-section'>
          <img src="https://buffer.com/static/illustrations/all-channels-3.webp" alt="img" />
        </div>
      </div>


      <div id='desc'>
        <div id='grow'><h1>Grow your following without draining your time</h1></div>
        <div id='para'><p>Social media can be the fastest and cheapest way to build your following and grow your business. But it can also take up all your time. Here are four ways Buffer can help.</p></div>
      </div>


      <div id='img-1'>
        <img src="https://buffer.com/static/misc/buffer-loop-v2-variant.svg" alt="img" />
      </div>

      {/* ************** */}

      <div id='share-content'>
        <div>
          <div>
            <div style={{marginTop:"20px"}}><h2>1. SHARE CLICK-WORTHY CONTENT</h2></div>
            <div style={{marginTop:"20px"}}><h1>Get the clicks you deserve</h1></div>
            <div style={{marginTop:"20px"}}><p>Buffer will tell you when and what to publish to make your content stand out.</p></div>
            <div style={{marginTop:"20px"}}><button>Get Started Now</button></div>
          </div>
        </div>
        <div><img src="https://buffer.com/static/illustrations/thumb-stop-content-2.webp" alt="img" /></div>
      </div>


      {/* 888888888888888888888 */}
      <div id='desc-1'>
        <div>
          <h3>Schedule your content</h3>
          <p>Plan and publish content across all major social media channels effortlessly.</p>
        </div>
        <div>
          <h3>Measure your performance</h3>
          <p>Track what’s working and create custom reports all from one analytics dashboard.</p>
        </div>
        <div>
          <h3>Engage your audience</h3>
          <p>See and reply to all of your social comments directly from your Buffer dashboard.</p>
        </div>
        <div>
          <h3>Manage from anywhere</h3>
          <p>Manage your social media strategy on Buffer and our iOS/Android apps.</p>
        </div>
      </div>

      <div id='desc-2'>
        <div><h4>An official marketing partner of the industry leaders</h4></div>
        <div id='desc-2-child'>
          <div><img src="https://buffer.com/static/ui/meta-business-partner@2x-2.png" alt="img-1" /></div>
          <div><img src="https://buffer.com/static/ui/pinterest-marketing-partner@2x-2.png" alt="img-2" /></div>
          <div><img src="https://buffer.com/static/ui/linkedin-marketing-partner@2x-2.png" alt="img-3" /></div>
        </div>
      </div>


      <div>
        <img src={img} alt="img" />
      </div>



    </div >
  )
}

export default LandingTopSection