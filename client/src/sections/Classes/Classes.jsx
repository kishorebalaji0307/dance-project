import { motion } from "framer-motion";
import {
  Music4,
  Flower2,
  Dumbbell,
  Users,
  Globe,
} from "lucide-react";

const classes = [
  {
    icon: Music4,
    title: "Hip Hop",
    age: "Age 3+",
    description:
      "Energetic hip hop classes designed for kids and adults to build confidence, rhythm, and stage presence.",
  },
  {
    icon: Flower2,
    title: "Bharatanatyam",
    age: "All Ages",
    description:
      "Learn the beauty of classical Bharatanatyam with proper techniques, expressions, and discipline.",
  },
  {
    icon: Dumbbell,
    title: "Aerobics",
    age: "Women Only",
    description:
      "Stay active and healthy with fun aerobic sessions specially designed for women.",
  },
  {
    icon: Users,
    title: "Ladies Dance Batch",
    age: "Women",
    description:
      "Enjoy dance workouts, fitness routines, and choreography in a comfortable environment.",
  },
  {
    icon: Globe,
    title: "Online Hip Hop",
    age: "Outside India",
    description:
      "Join live online classes from anywhere in the world with our experienced instructors.",
  },
];

const Classes = () => {
  return (
    <section id="classes" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-violet-600">
            OUR CLASSES
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-gray-900 lg:text-5xl">
            Dance Styles For Everyone
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 leading-8">
            Whether you're taking your first dance step or looking to refine
            your skills, we have the perfect class for every age and fitness level.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {classes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-violet-500 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 transition group-hover:bg-violet-600">
                  <Icon
                    size={32}
                    className="text-violet-600 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <span className="mt-2 inline-block rounded-full bg-violet-100 px-4 py-1 text-sm font-medium text-violet-700">
                  {item.age}
                </span>

                <p className="mt-5 leading-7 text-gray-600">
                  {item.description}
                </p>

                <button className="mt-8 rounded-full bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700">
                  Enquire Now
                </button>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Classes;