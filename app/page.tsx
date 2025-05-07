import Image from "next/image";
import Link from "next/link";
import HomeCourseList from "./components/HomeCourseList";
import HomeCertCourses from "./components/HomeCertCourses";
import HomeBenefits from "./components/HomeBenefits";

export default function Home() {
  return (
      <div>
        
        <div className="cover bg-dark ">
          <div className="text-white mt-[2rem] flex flex-col items-center justify-center gap-4 text-center">
            <div>
              <h2 className="font-semibold text-[2rem]">Learn Without <span className="color-normal">Boundaries</span> to reach your <br /> goals faster.</h2>
            </div>
            <div>
              <p>Discover a vast library of courses, expert mentors, and instructors who will help <br /> you reach your goals. Unlock your full potential and learn without limits!</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href='/' className="flex gap-2 btn btn-primary-fill">
                <p>Join for Free</p>
                <Image
                  aria-hidden
                  src="/assets/images/arrow-right.png"
                  alt="Colearn Logo"
                  width={14}
                  height={13}
                  className="object-contain"
                />
              </Link>
              <Link href='/' className="flex gap-2 btn">
                <Image
                  aria-hidden
                  src="/assets/images/book-saved.png"
                  alt="Colearn Logo"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <p>Explore</p>
              </Link>
            </div>

            <div className="">
              <div className="flex items-center justify-between bg-white gradient-border w-[40rem] my-[3em] py-[.5em] px-[1.5em] rounded-[.5rem]">
                <div className="flex items-center gap-2">
                  <Image
                    aria-hidden
                    src="/assets/images/search-normal.png"
                    alt="Colearn Logo"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <input type="text" placeholder="Search for anything" className="search-input w-[100%] placeholder-gray-400" />
                </div>
                <div>
                  <Link href='/' className="flex gap-2 btn btn-primary-fill">
                    <Image
                      aria-hidden
                      src="/assets/images/search-light.png"
                      alt="Colearn Logo"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <p>Search</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HomeCourseList />

        <HomeCertCourses />

        <HomeBenefits />

      </div>
      
  );
}
