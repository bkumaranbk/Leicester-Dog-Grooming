import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, User as UserIcon } from 'lucide-react'; // Renamed User icon to UserIcon
import { cn } from '@/lib/utils';
import logo from '../../public/assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { User } from '@/common/modal'; // This remains as your User type
import { setLogout } from '@/redux/authSlice';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state: {
    auth: {
      user: User | null;
    }
  }) => state.auth);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleProfile = () => setProfileOpen(!profileOpen);

  const handleLogout = () => {
    dispatch(setLogout());
    setProfileOpen(false);
    setShowLogoutConfirm(false);
    // navigate('/login/admin');
  };

  const openLogoutConfirm = () => {
    setShowLogoutConfirm(true);
    setProfileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    closeMenu();
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (profileOpen && !target.closest('.profile-dropdown')) {
        setProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileOpen]);

  const navLink = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    // { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
    // { href: '/book', label: 'Book Course' }
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        'bg-white/80 backdrop-blur-md shadow-subtle'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <img src={logo} alt="Leicester Dog Grooming" className="h-20 md:h-40 sm:h-28 lg:h-47" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLink.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative font-medium transition-colors duration-200 hover:text-brand-primary",
                  location.pathname === link.href ? "text-brand-primary" :
                    location.pathname === '/' ? (scrolled ? "text-foreground" : "text-white") : "text-foreground"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Phone CTA */}
            <a
              href="tel:+44 7930 549 717"
              className="flex items-center space-x-2 text-brand-primary hover:opacity-90 transition-opacity"
            >
              <Phone size={18} />
              <span className="font-medium">+44 7930 549 717</span>
            </a>

            {/* Profile dropdown */}
            {user && (
              <div className="relative profile-dropdown">
                <button
                  onClick={toggleProfile}
                  className="flex items-center space-x-1 text-foreground hover:text-brand-primary transition-colors"
                  aria-label="User profile"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <UserIcon size={18} />
                  </div>
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      <div className="font-medium">{user?.fullName}</div>
                    </div>
                    <button
                      onClick={openLogoutConfirm}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-brand-primary transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden px-4 py-2 h-full transition-colors shadow-subtle">
          <div className="flex flex-col space-y-2">
            {navLink.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="p-2 hover:bg-blue-100 rounded"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            {user && (
              <>
                <div className="p-2 border-t mt-2">
                  <div className="font-medium">{user.fullName}</div>
                </div>
                <button
                  onClick={() => {
                    openLogoutConfirm();
                    closeMenu();
                  }}
                  className="p-2 text-left hover:bg-blue-100 rounded"
                >
                  Logout
                </button>
              </>
            )}
            <a
              href="tel:+44 7930 549 717"
              className="mt-2 flex items-center space-x-2 text-brand-primary"
            >
              <Phone size={20} />
              <span className="font-medium">+44 7930 549 717</span>
            </a>
          </div>
        </nav>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-[9999] flex justify-center items-start pt-20 bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Confirm Logout
                </h3>
                <button
                  type="button"
                  onClick={() => setShowLogoutConfirm(false)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                >
                  <X size={20} />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-gray-500">
                  Are you sure you want to logout?
                </p>
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    onClick={() => setShowLogoutConfirm(false)}
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleLogout}
                    className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;