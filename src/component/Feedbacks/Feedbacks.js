import React from "react";
import "./Feedbacks.css";

const Feedbacks = () => {
  return (
    <div className="feedback-container">
      <div className="container">
        <h2 className="fw-bold my-5">Student Feedback</h2>

        {/* student 1 */}

        <div className="row feedback my-3 p-4">
          <div className="col-md-4">
            <div className="student-img mb-4">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/devskillimagestorage/profileimages/5e3a453b-4ed6-46e5-8f7c-49c690761842_fa3da0feb2f34494b0dac1729109cf8d_W400xH0.jpg"
                alt=""
              />
            </div>
            <div className="student-details">
              <h4 className="student-name">Ahsan Shafiq Shawon</h4>
              <p>
                <small>Posted On: 09-Jul-2020</small>
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <p className="student-feedback">
              সাদমান সাকিব চমৎকার একজন শিক্ষক। তার আন্তরিকতা খুবই হৃদয়গ্রাহী।
              ডেভস্কিলের ব্যবস্থাপনা খুব ভালো। এই কোর্স করে আমার অনেক উপকার
              হয়েছে। মহান রাব্বুল আলামিন প্রশিক্ষক ও প্রতিষ্ঠান উভয়কে যেন উত্তম
              প্রতিদান দান করেন। আমিন।
            </p>
          </div>
        </div>

        {/* student 2 */}

        <div className="row feedback my-3 p-4">
          <div className="col-md-4">
            <div className="student-img mb-4">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/devskillimagestorage/profileimages/a03d0b24-c4b7-40ae-88ed-24c71306641d_da8faea4ac0045058fa530b8a64013c3_W400xH0.jpg"
                alt=""
              />
            </div>
            <div className="student-details">
              <h4 className="student-name">Mizanur Rahman</h4>
              <p>
                <small>Posted On: 24-Dec-2020</small>
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <p className="student-feedback">
              Thank's Devskill and Khalid Bin Sattar Sir for arranging Docker
              Essentials course. This is a startup course for Application
              Life-cycle Management and Source Control. I learnd Basic Docker
              Commands, docker-compose.yml(automate the docker containers),
              swarm and yml. Our Trainer and Teaching method were clear and
              fluent. I hope it will help beginners for start their DevOps
              carrier.
            </p>
          </div>
        </div>

        {/* student 3 */}

        <div className="row feedback my-3 p-4">
          <div className="col-md-4">
            <div className="student-img mb-4">
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/devskillimagestorage/profileimages/db2ddf99-3623-467b-91ce-67559e7ff876_7426652777404d81bc1af757ef90bb79_W400xH0.jpg"
                alt=""
              />
            </div>
            <div className="student-details">
              <h4 className="student-name">Arafin Ahmed</h4>
              <p>
                <small>Posted On: 07-May-2020</small>
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <p className="student-feedback">
              আমি এই কোর্সের প্রথম ব্যাচের স্টুডেন্ট। যাদের বেসিক প্রোগ্রামিং
              স্কিল আছে এবং পাইথন শিখতে আগ্রহী তাদের জন্য এই কোর্সটা একদম
              উপযুক্ত। এই কোর্সে আমরা ২৪ টি ক্লাস করি। আমাদের ইনস্ট্রাকটর হাবিব
              আল সাকি প্রতিটা ক্লাস একদম গুছিয়ে নিয়েছেন। ভাই এটা নিশ্চিত করেছেন
              যে প্রতিটা স্টুডেন্ট যেন টপিকটা বুঝতে পারে। সবাই বুঝার পরেই তিনি
              নতুন টপিকে গিয়েছেন। আর এই কোর্সে অফুরন্ত প্রশ্ন করার সুযোগ ছিল
              আমাদের। তিন মাসে শেষ হওয়ার কথা থাকলেও শেষ হতে চার মাস সময় লেগেছিল।
              এই দীর্ঘ সময় পাইথন সম্পর্কে অনেক নতুন কিছু আমি শিখতে পেরেছি। সকল
              রিসোর্স অনলাইনে আছে। আমাদের প্রয়োজন একটি সঠিক গাইডলাইন। পাইথন
              শেখার ক্ষেত্রে আমি সেই গাইডলাইনটিই এখানে পেয়েছি। আমাদের
              ইনস্ট্রাক্টর ভাইয়ার প্রতি অনেক অনেক কৃতজ্ঞতা।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
