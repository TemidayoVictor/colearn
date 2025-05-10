import HomeHero from "./components/HomeHero";
import HomeCourseList from "./components/HomeCourseList";
import HomeCertCourses from "./components/HomeCertCourses";
import HomeBenefits from "./components/HomeBenefits";
import HomeTutors from "./components/HomeTutors";
import HomeBooking from "./components/HomeBooking";
import HomeBanner from "./components/HomeBanner";
import HomeReviews from "./components/HomeReviews";
import HomeFaq from "./components/HomeFaq";

export default function Home() {
  return (
      <div>

        <HomeHero />

        <HomeCourseList />

        <HomeCertCourses />

        <HomeBenefits />
        
        <HomeTutors />

        <HomeBooking />

        <HomeBanner title="Become a Tutor and Instructor on CoLearn" subtitle="Lorem ipsum dolor sit amet consectetur. In senectus fames faucibus cursus risus in sit neque. Sed convallis amet est eget. Placerat augue id pellentesque fermentum. Elementum laoreet turpis elit pulvinar in sit ut." link="/" linkTitle="Register" />

        <HomeReviews />

        <HomeFaq />

      </div>
      
  );
}
