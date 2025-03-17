import ShowcaseNavbar from "@/components/showcase-navbar";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ProjectsBlurFadeDemo } from "@/components/demos/projects-blur-fade-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Footer from "@/components/footer";

const Showcase = () => {
  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <ShowcaseNavbar />
      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <div className="flex items-center justify-center relative">
          <BlurFade delay={0.25} inView>
            <h2 className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center z-20">
              AI-powered solutions that drive real business results.
            </h2>
          </BlurFade>
        </div>
        <BlurFade delay={0.25 * 2} inView>
          <p className="md:text-center text-xl md:text-2xl my-6 md:w-4/5 mx-auto text-gray-500">
            Have a look at some of our recent projects.
          </p>
        </BlurFade>

        <ProjectsBlurFadeDemo />
        <LetsMakeThingsHappenSection />
      </section>
      <Footer />
    </div>
  );
};

export default Showcase;
