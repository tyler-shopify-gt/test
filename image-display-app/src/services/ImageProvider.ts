import logo from '../logo.svg';

interface ImageOptions {
  alt?: string;
  className?: string;
  [key: string]: any;
}

interface ImageProps {
  src: string;
  alt: string;
  className: string;
  [key: string]: any;
}

class ImageProvider {
  private logo: string;

  constructor() {
    this.logo = logo;
  }

  /**
   * Get the logo image
   * @returns {string} The logo image URL
   */
  getLogo(): string {
    return this.logo;
  }

  /**
   * Get image with custom properties
   * @param {ImageOptions} options - Image options
   * @returns {ImageProps} Image object with src and properties
   */
  getLogoWithProps(options: ImageOptions = {}): ImageProps {
    return {
      src: this.logo,
      alt: options.alt || 'React Logo',
      className: options.className || 'App-logo',
      ...options
    };
  }

  /**
   * Check if logo is loaded
   * @returns {Promise<boolean>} True if logo loads successfully
   */
  async isLogoLoaded(): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = this.logo;
    });
  }
}

// Create and export a singleton instance
const imageProvider = new ImageProvider();
export default imageProvider; 