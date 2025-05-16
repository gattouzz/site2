import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function CodeAlmaLanding() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <header className="flex justify-between items-center p-6 shadow-md sticky top-0 z-50 bg-opacity-80 backdrop-blur-sm dark:bg-gray-900 bg-white">
        <h1 className="text-2xl font-bold">Code Alma Solutions</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full border border-gray-300 dark:border-gray-700"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>

      <motion.section
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 className="text-4xl md:text-6xl font-extrabold mb-4" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}>نصنع الحلول التقنية بذكاء وأناقة</motion.h2>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          في Code Alma، نطوّر تجارب رقمية مبتكرة تجمع بين التصميم الفاخر والتقنيات المتقدمة.
        </p>
        <motion.a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-2xl shadow-md transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          تواصل معنا
        </motion.a>
      </motion.section>

      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
        <h3 className="text-3xl font-bold text-center mb-10">خدماتنا</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "تطوير المواقع", desc: "نصمم ونبرمج مواقع جذابة وسريعة الاستجابة." },
            { title: "حلول مخصصة", desc: "نبني أنظمة مخصصة لتناسب احتياجات أعمالك." },
            { title: "تصميم واجهات", desc: "تصاميم UI/UX احترافية تركّز على تجربة المستخدم." }
          ].map((s, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 text-center bg-white dark:bg-gray-900">
        <h3 className="text-3xl font-bold mb-6">من نحن</h3>
        <motion.div
          className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-4">
            نحن في <strong>Code Alma Solutions</strong> نؤمن أن التقنية ليست مجرد أدوات بل وسيلة لإحداث فرق حقيقي. نعمل بشغف على تقديم حلول برمجية وتصميمات رقمية عالية الجودة تواكب المستقبل وتلبي تطلعات عملائنا.
          </p>
          <p>
            فريقنا يجمع بين الخبرة، الابتكار، والاهتمام بالتفاصيل، لنقدم لك تجربة متكاملة من الفكرة إلى التنفيذ.
          </p>
        </motion.div>
      </section>

      <motion.section
        className="py-20 px-6 text-center"
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold mb-6">تواصل معنا</h3>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="الاسم" className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent" />
          <input type="email" placeholder="البريد الإلكتروني" className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent" />
          <textarea placeholder="رسالتك" rows="5" className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent"></textarea>
          <motion.button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-2xl shadow-md transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            إرسال
          </motion.button>
        </form>
      </motion.section>

      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        © 2025 Code Alma Solutions for Technologies. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}
