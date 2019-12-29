module.exports = {
  /** Site MetaData (Required all)*/
  title: `Title`,                           // (* Required)
  description: `Blog Description`,          // (* Required)
  author: `Author`,                         // (* Required)
  siteUrl: 'https://',                      // (* Required) ex.'https://junhobaik.github.io'

  /** Header */
  profileImageFileName: '', // include filename extension ex.'profile.jpg'
    // The Profile image file is located at path "./images/"
    // If the file does not exist, it is replaced by a random image.

  /** Home > Bio information*/
  comment: 'Enter your information in the "./config.js" file. ',
  name: 'User Name',
  company: '',
  location: 'Korea',
  email: '',
  website: 'https://github.com/junhobaik/junhobaik.github.io',           // ex.'https://junhobaik.github.io'
  linkedin: '',                                                          // ex.'https://www.linkedin.com/in/junho-baik-16073a19ab'
  facebook: '',                                                          // ex.'https://www.facebook.com/zuck' or 'https://www.facebook.com/profile.php?id=000000000000000'
  instagram: '',                                                         // ex.'https://www.instagram.com/junhobaik'
  github: '',                                                            // ex.'https://github.com/junhobaik'

  /** Post */
  enablePostOfContents: true,     // TableOfContents activation (Type of Value: Boolean. Not String)
  disqusShortname: '',            // comments (Disqus sort-name)

  /** Optional */
  googleAnalytics: '',                  // Google Analytics TrackingID. ex.'UA-123456789-0'
  googleAdsenseClient: '',              // Google Adsense Client. ex.'ca-pub-5001380215831339'
  googleAdsenseSlot: '',                // Google Adsense Slot. ex.'5214956675'
};
