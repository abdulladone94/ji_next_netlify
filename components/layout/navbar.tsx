import { useEffect, useState } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

import logo_round from '../../assets/logo/blogo-with-text.png';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  // sticky scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled && 'border-b  border-white/[0.2] bg-black sm:bg-[#141414]/50'
      } sticky top-0 z-30 overflow-hidden py-6 font-jost text-xl`}
    >
      <div className="mx-auto flex w-4/5 items-center justify-between gap-16 sm:mx-auto">
        {/* leftside */}
        <div className="relative h-[80px] w-[80px] cursor-pointer">
          <Link href="/">
            <Image
              src={logo_round}
              alt="jewel iconic logo"
              objectFit="contain"
            />
          </Link>
        </div>
        {/* rightside */}
        <nav className="hidden w-full justify-end sm:inline-flex">
          <ol className="flex gap-5 lg:gap-20 [&_a:hover]:text-yellow-100 [&_a]:transition-colors">
            <li className="rounded-sm py-[2px] px-3 transition delay-150 ease-in-out">
              <Link
                href="/gems"
                className={router.pathname === '/gems' ? 'text-yellow-400' : ''}
              >
                Gems
              </Link>
            </li>
            <li className="rounded-sm py-[2px] px-3 transition delay-150 ease-in-out ">
              <Link
                href="/jewelry"
                className={
                  router.pathname === '/jewelry' ? 'text-yellow-400' : ''
                }
              >
                Jewelry
              </Link>
            </li>
            {/* <li className="rounded-sm py-[2px] px-3 transition delay-150 ease-in-out">
              <Link
                href="/research"
                className={
                  router.pathname === '/research' ? 'text-yellow-400' : ''
                }
              >
                Research
              </Link>
            </li> */}
            <li className="rounded-sm py-[2px] px-3 transition delay-150 ease-in-out">
              <Link
                href="/company"
                className={
                  router.pathname === '/company' ? 'text-yellow-400' : ''
                }
              >
                Company
              </Link>
            </li>
            <li className="rounded-sm py-[2px] px-3 transition delay-150 ease-in-out">
              <Link
                href="/articles"
                className={
                  router.pathname === '/articles' ? 'text-yellow-400' : ''
                }
              >
                Articles
              </Link>
            </li>
          </ol>
        </nav>

        {/* mobile menu */}
        <div
          onClick={() => setToggle((toggle) => !toggle)}
          className="relative flex flex-1 items-center justify-end sm:hidden"
        >
          <div className="Toogle Menu">
            <span className="sr-only">Toogle Menu</span>
            {toggle ? (
              <XMarkIcon className="h-[30px] w-[40px] object-contain opacity-100 transition-opacity duration-500" />
            ) : (
              <Bars3Icon className="h-[30px] w-[40px] object-contain opacity-100 transition-opacity duration-500" />
            )}
          </div>

          <div
            className={`${
              toggle ? 'visible ' : 'invisible delay-500'
            }  sidebar fixed top-24 right-[10px] mx-4 my-2 min-w-[240px] rounded-xl border border-white/[0.2] p-6 transition-all  duration-500  `}
          >
            <nav
              className={`${
                toggle ? 'opacity-100' : 'opacity-0'
              } flex w-full justify-end  transition-opacity duration-500`}
            >
              <ol className="flex flex-col gap-5 lg:gap-20  [&_a:hover]:text-yellow-100 [&_a]:transition-colors">
                <li className="rounded-sm py-[2px] px-3 transition delay-150 ease-in-out">
                  <Link
                    href="/products"
                    className={
                      router.pathname === '/products' ? 'text-yellow-400' : ''
                    }
                  >
                    Products
                  </Link>
                </li>
                <li className="rounded-sm py-[2px] px-3 transition delay-150 ease-in-out ">
                  <Link
                    href="/projects"
                    className={
                      router.pathname === '/projects' ? 'text-yellow-400' : ''
                    }
                  >
                    Projects
                  </Link>
                </li>
                <li className="rounded-sm py-[2px] px-3 transition delay-150 ease-in-out">
                  <Link
                    href="/research"
                    className={
                      router.pathname === '/research' ? 'text-yellow-400' : ''
                    }
                  >
                    Research
                  </Link>
                </li>
                <li className="rounded-sm py-[2px] px-3 transition delay-150 ease-in-out">
                  <Link
                    href="/company"
                    className={
                      router.pathname === '/company' ? 'text-yellow-400' : ''
                    }
                  >
                    Company
                  </Link>
                </li>
                <li className="rounded-sm py-[2px] px-3 transition delay-150 ease-in-out">
                  <Link
                    href="/articles"
                    className={
                      router.pathname === '/articles' ? 'text-yellow-400' : ''
                    }
                  >
                    Articles
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
