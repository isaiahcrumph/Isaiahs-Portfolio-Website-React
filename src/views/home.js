import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Isaiah's Portfolio Website</title>
        <meta property="og:title" content="Isaiah's Portfolio Website" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">#projects</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">#about</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">#contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Projects</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">About</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">View Home</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">View Projects</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">
              Welcome to Isaiah Rumph&apos;s Portfolio
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Explore Isaiah&apos;s Latest Projects
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">Learn More About Isaiah Rumph</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              Get in Touch with Isaiah for Collaboration
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">View Projects</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Contact Isaiah</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Explore the innovative projects and solutions created by freelance
              Software Developer Isaiah Rumph.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Welcome to Isaiah Rumph&apos;s Portfolio
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">Feature 1</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Feature 2</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Feature 3</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">Description of feature 1</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">Description of feature 2</span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">Description of feature 3</span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Contact Isaiah Rumph</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Let&apos;s work together to create innovative software solutions
              tailored to your needs.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">
              Ready to bring your ideas to life?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">Web Development</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Mobile App Development</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Database Management</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Creating responsive and user-friendly websites tailored to your
              needs.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Designing and developing custom mobile applications for iOS and
              Android platforms.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Building and maintaining efficient databases to store and manage
              your data securely.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic Plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Standard Plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Premium Plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text141">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text142">$50</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text143">$100</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text144">$150</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text145">Purchase Now</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text146">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text147">$500</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Purchase Now</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text149">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text150">$1000</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text151">Purchase Now</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text152">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text153">$1500</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text155">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text157">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text159">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text160">Feature 1 included</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text161">Feature 2 included</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text162">Feature 3 included</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text163">Feature 1 included</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text164">Feature 2 included</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text165">Feature 3 included</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text166">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text167">Feature 1 included</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text168">Feature 2 included</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text169">Feature 3 included</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text184">Initial Consultation</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text185">Development Phase</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text186">Testing and Feedback</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text187">Delivery and Support</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text188">
              Schedule a meeting to discuss your project requirements and goals.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              I will start working on your project using the latest technologies
              and best practices.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text190">
              You will have the opportunity to test the software and provide
              feedback for any necessary adjustments.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text191">
              Upon completion, I will deliver the final product and provide
              ongoing support as needed.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text192">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text193">
              Working with Isaiah has been a game-changer for our development
              projects. His professionalism and technical skills are top-notch.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text194">
              I am impressed by Isaiah&apos;s ability to turn complex ideas into
              functional software solutions. He is a true expert in his field.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text195">
              Collaborating with Isaiah has been a pleasure. His attention to
              detail and problem-solving skills have significantly contributed
              to our projects&apos; success.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text196">
              Isaiah&apos;s expertise and dedication to delivering high-quality
              software solutions have been invaluable to our company. We highly
              recommend his services.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text197">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text198">John Smith</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Emily Johnson</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text200">Michael Brown</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Sarah Lee</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text202">CEO, ABC Inc.</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text203">CTO, XYZ Corp.</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text204">Founder, LMN Tech</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text205">Lead Developer, PQR Co.</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Feel free to reach out for project inquiries, collaborations, or
              just to say hello!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text207">Get in Touch</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text208">Email</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text209">Social Media</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text210">isaiahrumph@example.com</span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              Connect with me on LinkedIn and GitHub
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text212">Portfolio</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text213">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text214">Contact</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text215">About</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text216">Blog</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
