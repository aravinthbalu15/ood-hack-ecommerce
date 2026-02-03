import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import { Strategy as FacebookStrategy } from "passport-facebook"
import User from "../models/userModel.js"

/* =======================
   GOOGLE STRATEGY
======================= */
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value.toLowerCase()

        let user = await User.findOne({ email })

        if (!user) {
          user = await User.create({
            name: profile.displayName,
            email,
            provider: "google",
            googleId: profile.id,
            image: {
              url: profile.photos[0].value,
              public_id: "google-avatar",
            },
          })
        }

        return done(null, user)
      } catch (error) {
        return done(error, null)
      }
    }
  )
)

/* =======================
   FACEBOOK STRATEGY
======================= */
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
      profileFields: ["id", "displayName", "emails", "photos"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value?.toLowerCase()

        if (!email) {
          return done(
            new Error("Facebook account has no email"),
            null
          )
        }

        let user = await User.findOne({ email })

        if (!user) {
          user = await User.create({
            name: profile.displayName,
            email,
            provider: "facebook",
            facebookId: profile.id,
            image: {
              url: profile.photos?.[0]?.value,
              public_id: "facebook-avatar",
            },
          })
        }

        return done(null, user)
      } catch (error) {
        return done(error, null)
      }
    }
  )
)
