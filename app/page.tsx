import HomeHero from "./components/HomeHero";
import HomeCourseList from "./components/HomeCourseList";
import HomeCertCourses from "./components/HomeCertCourses";
import HomeBenefits from "./components/HomeBenefits";
import HomeTutors from "./components/HomeTutors";
import HomeBooking from "./components/HomeBooking";
import HomeBanner from "./components/HomeBanner";
import HomeReviews from "./components/HomeReviews";

export default function Home() {
  return (
      <div>

        <HomeHero />

        <HomeCourseList />

        <HomeCertCourses />

        <HomeBenefits />
        
        <HomeTutors />

        <HomeBooking />

        <HomeBanner />

        <HomeReviews />

      </div>
      
  );
}
