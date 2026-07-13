import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-[#0B0B0B] min-h-screen py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-[#D4AF37]">
            CONTACT
          </p>

          <h1 className="mt-5 text-6xl font-black text-white">
            Let's Connect
          </h1>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            We'd love to welcome you to 5678 Dance & Fitness Studio.
          </p>

        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-14">

          {/* LEFT */}

          <div className="space-y-10">

            <div className="flex gap-5">

              <MapPin className="text-[#D4AF37]" />

              <div>

                <h3 className="text-white font-semibold">
                  Address
                </h3>

                <p className="text-gray-400 mt-2">
                  5678 Dance & Fitness Studio
                  <br />
                  Chidambaram
                  <br />
                  Tamil Nadu
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <Phone className="text-[#D4AF37]" />

              <div>

                <h3 className="text-white font-semibold">
                  Phone
                </h3>

                <p className="text-gray-400 mt-2">
                  +91 88253 85706
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <Mail className="text-[#D4AF37]" />

              <div>

                <h3 className="text-white font-semibold">
                  Email
                </h3>

                <p className="text-gray-400 mt-2">
                  info@5678dance.com
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <Clock className="text-[#D4AF37]" />

              <div>

                <h3 className="text-white font-semibold">
                  Working Hours
                </h3>

                <p className="text-gray-400 mt-2">
                  Monday - Sunday
                  <br />
                  6:00 AM - 9:00 PM
                </p>

              </div>

            </div>

          </div>

          {/* MAP */}

          <div className="overflow-hidden rounded-[35px] border border-[#D4AF37]/20">

            <iframe
              src="YOUR_GOOGLE_EMBED_LINK"
              width="100%"
              height="600"
              loading="lazy"
              allowFullScreen=""
              className="border-0"
            ></iframe>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;