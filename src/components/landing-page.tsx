import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import BikeCarousel from "@/components/bikeCarousel";

import { submitEmail } from "@/lib/email";
/**
 *
 * @param props - component props
 * @param props.className - class name to apply to the icon
 * @returns BikeIcon SVG component
 */
function BikeIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
  );
}

/**
 * @returns LandingPage component
 */
export function LandingPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="flex h-14 items-center px-4 lg:px-6">
        <Link className="flex items-center justify-center" href="#">
          <BikeIcon className="size-6" />
          <span className="sr-only">NewBike</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Personalize
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Personalized Bicycles for Older Adults
                  </h1>
                  <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                    NewBike offers a customized cycling experience with features
                    like personalized suspension, extra wheels, and an electric
                    motor to make your rides safer and more comfortable.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <form action={submitEmail} className="flex w-full space-x-2">
                    <Input
                      className="max-w-lg flex-1"
                      placeholder="Enter your email"
                      type="email"
                      name="email"
                    />
                    <Button type="submit">Get Updates</Button>
                  </form>
                </div>
              </div>
              <BikeCarousel />
            </div>
          </div>
        </section>
        <section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Personalize Your Ride
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose from a variety of options to create your perfect
                  bicycle.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Frame Size</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Choose from small, medium, or large frames.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline">Small</Button>
                    <Button variant="outline">Medium</Button>
                    <Button variant="outline">Large</Button>
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Wheel Type</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Select from standard or extra-wide wheels.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline">Standard</Button>
                    <Button variant="outline">Extra-Wide</Button>
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Motor Power</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Choose from 250W, 500W, or 750W electric motors.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline">250W</Button>
                    <Button variant="outline">500W</Button>
                    <Button variant="outline">750W</Button>
                  </div>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Suspension</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Select from standard or personalized suspension.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline">Standard</Button>
                    <Button variant="outline">Personalized</Button>
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Wheel Count</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Choose between 2 or 3 wheels for added stability.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline">2 Wheels</Button>
                    <Button variant="outline">3 Wheels</Button>
                  </div>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Color</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Select from a variety of color options.
                  </p>
                  <div className="flex gap-2">
                    <Button className="bg-[#f44336]" variant="outline" />
                    <Button className="bg-[#e91e63]" variant="outline" />
                    <Button className="bg-[#9c27b0]" variant="outline" />
                    <Button className="bg-[#673ab7]" variant="outline" />
                    <Button className="bg-[#3f51b5]" variant="outline" />
                    <Button className="bg-[#2196f3]" variant="outline" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-100 p-6 dark:bg-gray-800 md:py-12">
        <div className="container grid max-w-7xl grid-cols-2 gap-8 text-sm sm:grid-cols-3 md:grid-cols-5">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#">About Us</Link>
            <Link href="#">Our Team</Link>
            <Link href="#">Careers</Link>
            <Link href="#">News</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#">NewBike</Link>
            <Link href="#">Accessories</Link>
            <Link href="#">Parts</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#">Blog</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">Support</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#">Sales</Link>
            <Link href="#">Support</Link>
            <Link href="#">Partnerships</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
