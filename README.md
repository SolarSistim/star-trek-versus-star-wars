# Star Wars vs Star Trek - The Definitive Answer

A satirical static web page that settles the age-old debate between Star Wars and Star Trek fans using "scientific evidence" and "peer-reviewed research."

## How It Works

This is a single HTML page that uses URL parameters to display different content:

- **Star Wars Wins**: `index.html?starwars`
- **Star Trek Wins**: `index.html?startrek`

If no parameter is provided, it randomly selects one side to keep things interesting!

## Setup Instructions

### 1. Add Images

You need to add the following images to this folder:

#### Required Images:

1. **placeholder-starwars.jpg** - Hero image for Star Wars page
   - Suggested: Epic space battle, Death Star, or lightsaber action
   - Recommended size: 1920x1080px (16:9 ratio)
   - Can be an animated WebP for extra impact

2. **placeholder-startrek.jpg** - Hero image for Star Trek page
   - Suggested: Enterprise battle, warp effect, or dramatic Picard moment
   - Recommended size: 1920x1080px (16:9 ratio)
   - Can be an animated WebP for extra impact

3. **favicon.ico** (Optional) - Browser tab icon
   - You can copy from the rickroll folder or create a new one

### 2. Image Suggestions

Here are some ideas for the hero images/animations:

#### For Star Wars Page:
- Animated compilation of X-Wings, TIE Fighters, and Death Star
- Lightsaber duel compilation
- "It's over, I have the high ground" meme
- Epic space battle montage
- Darth Vader force choke scene

#### For Star Trek Page:
- Enterprise warping into battle
- "Make it so" Picard compilation
- Phaser fire and shields compilation
- Borg cube battle scene
- "Fascinating" Spock reaction compilation

### 3. Creating Animated WebPs

If you want to use animated WebPs like your Sound in Space page:

1. Find or create a short video clip (5-10 seconds)
2. Convert to WebP using tools like:
   - [CloudConvert](https://cloudconvert.com/mp4-to-webp)
   - [Ezgif](https://ezgif.com/video-to-webp)
   - FFmpeg: `ffmpeg -i input.mp4 -vcodec libwebp -lossless 0 -q:v 80 -loop 0 output.webp`

### 4. Update Image Paths

Once you have your images, update the file names in `script.js`:

```javascript
const CONTENT = {
  starwars: {
    heroImage: 'your-starwars-image.webp', // Change this line
    // ...
  },
  startrek: {
    heroImage: 'your-startrek-image.webp', // Change this line
    // ...
  }
};
```

## Customization

### Update Google Analytics

Replace the Google Analytics ID in `index.html`:

```html
gtag('config', 'G-EN03BGVCWT'); <!-- Replace with your GA ID -->
```

### Modify Content

All content is stored in the `script.js` file in the `CONTENT` object. You can easily modify:

- Title text
- Introduction paragraphs
- Statistics
- Testimonials
- Technical/Tactical points
- Citations

### Easter Egg

There's a hidden easter egg: Click the logo 10 times to switch to the other side's page!

## File Structure

```
star-trek-versus-star-wars/
├── index.html          # Main HTML page
├── styles.css          # Cosmic-themed styles
├── script.js           # Content and logic
├── README.md           # This file
├── placeholder-starwars.jpg    # ADD THIS
├── placeholder-startrek.jpg    # ADD THIS
└── favicon.ico         # Optional
```

## Sharing on Social Media

The page includes Open Graph and Twitter Card meta tags that will dynamically update based on which "winner" is shown. When you share:

- `?starwars` will show Star Wars victory meta tags
- `?startrek` will show Star Trek victory meta tags

Perfect for trolling both sides of the debate!

Share the base URL with no parameters and let fate decide which side people see first! 🎲

## Deployment

Upload all files to your web server. The page is pure HTML/CSS/JavaScript with no backend requirements.

## Credits

Created for In The Verse - Because the internet needs more satirical takes on space franchise debates.

May the Force be with you... or Live Long and Prosper... whichever side you're on today. 🚀🖖
