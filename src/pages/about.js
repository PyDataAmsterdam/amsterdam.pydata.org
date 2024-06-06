import React, { useRef, useEffect } from 'react';
import Layout from '../components/Layout'
import AboutHeader from '../components/AboutHeader';
import Button from '../components/Button';
import CommitteeMembers from '../components/CommitteeMembers';

// Step 2: Define your component
const AboutPage = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.8;
        }
    }, []);

    return (
        <Layout>
            {/* ----- Conference Overview --------- */}

            <AboutHeader/>

             {/* ------- VIDEO LOOP COMMITTEE ------- */}

             <div className="video-container" style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '30%' }}>
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    }}
                >
                    <source src="/videos/committee.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>


            <div className="m-2 buttons-breakpoint:py-24">
                <div class="max-w-6xl mx-auto p-5">
                    <p class="text-lg ">
                    We welcome attendees with wide varieties of experiences, expertise, and backgrounds to join us at the Kromhouthal, 
                    Amsterdam. Users, contributors, and newcomers can share experiences and learn from one another to solve hard problems 
                    and grow a stronger open-source community.
                    </p>
                    <br/>
                    <p class="text-lg "> 
                    September 18 - 20 2024
                    </p>
                    <br/>
                    <p class="text-lg "> 
                    As we work to assemble programming for the 2024 conference, you can browse recordings from previous 
                    PyData editions on our YouTube to get a better idea of the subject matter covered at PyData Amsterdam.
                    </p>
                </div>

                <div class="max-w-6xl mx-auto p-5">
                    <p class="text-lg ">
                    PyData is an educational program of NumFOCUS, a 501(c)3 non-profit organization in the United States. 
                    PyData provides a forum for the international community of users and developers of data analysis tools 
                    to share ideas and learn from each other. The global PyData network promotes discussion of best practices, 
                    new approaches, and emerging technologies for data management, processing, analytics, and visualization. 
                    PyData communities approach data science using many languages, including (but not limited to) Python, Julia, and R.
                    </p>
                    <br/>
                    <p class="text-lg ">
                    We aim to be an accessible, community-driven conference, with novice to advanced level presentations. 
                    PyData tutorials and talks bring attendees the latest project features along with cutting-edge use cases.
                    </p>
                </div>
                <div className="mt-8 flex justify-center">
                    <Button
                        label="Join Us"
                        icon="ticket"
                        color="orange"
                        to="/tickets"
                    />
                </div>
            </div>
            

            {/* -------- COMMITEE MEMBERS -------- */}

            <CommitteeMembers />
            {/* ------- Code of Conduct ------- */}

            <div className="buttons-breakpoint:py-24">
                <div className="pt-8 pb-8">
                    <h2 className="text-center text-4xl text-black">Code of Conduct</h2>
                </div>
                    <div class="max-w-6xl mx-auto p-5">
                        <p class="text-lg ">
                        PyData has an engaged and respectful community made up of people from all over the world. 
                        We are committed to creating a productive, professional, and inclusive environment for everyone. 
                        All community members are expected to show respect and courtesy to other attendees 
                        throughout the conference, all conference events and online forums. 
                        Our code of conduct is strictly enforced.
                        </p>
                        <br/>
                        <p class="text-lg ">
                        Do not insult or put down others. Behave professionally. Remember that harassment and sexist, 
                        racist, or exclusionary jokes are not appropriate for PyData Amsterdam.
                        </p>
                        <br/>
                        <p class="text-lg ">
                        All communication should be appropriate for a professional audience including people of many different backgrounds. 
                        Sexual language and imagery is not appropriate.
                        </p>
                        <br/>
                        <p class="text-lg ">
                        PyData Amsterdam is dedicated to providing a harassment-free community for everyone, regardless of gender, 
                        sexual orientation, gender identity and expression, disability, physical appearance, 
                        body size, race, or religion. We do not tolerate harassment of community members in any form.
                        </p>
                        <br/>
                        <p class="text-lg ">
                        Thank you for helping make this a welcoming, friendly community for all!
                        </p>
                    </div>
                 </div>
            
            {/* ------- Diversity------- */}

            <div className="grey-background-section buttons-breakpoint:py-24">
                <div className="pt-8 pb-8">
                    <h2 className="text-center text-4xl text-black">Diversity</h2>
                </div>
                    <div class="max-w-6xl mx-auto p-5">
                        <p class="text-lg ">
                        Our commitment to the PyData community is to create an inclusive and respectful conference environment that invites 
                        participation of people from all backgrounds. We welcome a diverse attendance to foster deeper discussions and build a stronger community.
                        </p>
                        <br/>
                        <p class="text-lg ">
                        PyData Amsterdam welcomes and encourages participation in our community by people of all backgrounds and identities. 
                        We are committed to promoting and sustaining a culture that values mutual respect, tolerance, and learning, and we work together 
                        as a community to help each other live out these values.
                        </p>
                        <br/>
                        <p class="text-lg ">
                        We have created this diversity statement because we believe that a diverse community is stronger, more vibrant, 
                        and produces better software and better science. A diverse community where people treat each other with respect has 
                        more potential contributors, more sources for ideas, and fewer shared assumptions that might hinder development or research.
                        </p>
                        <br/>
                        <p class="text-lg">
                        Although we have phrased the formal diversity statement generically to make it all-inclusive, we recognize that 
                        there are specific identities that are impacted by systemic discrimination and marginalization. 
                        We welcome all people to participate in the NumFOCUS community regardless of their identity or background.
                        </p>
                    </div>
                 </div>

        </Layout>
    )
  }
  
export const Head = () => <title>About PyData Amsterdam 2024</title>

// Step 3: Export your component
export default AboutPage