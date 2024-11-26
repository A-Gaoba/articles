import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6" dir="rtl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        عن الكاتب
      </h1>
      <div className="text-gray-700 space-y-4">
        <p className="text-lg">
          أنا كاتب أو ربما يُمكنني أن أعتبر نفسي شبه كاتب، أكتب من مشاعري الخاصة
          أو من تجارب الآخرين، أو ربما من تأملاتي في عالم يسوده الكثير من
          التناقضات. أعيش مشاعر قد تكون مألوفة للبعض، أو مشاعر قد يراها البعض
          غريبة أو مبتكرة. أكتب عن الحب، الحزن، الفرح، الخوف، كل ما يمر في
          حياتنا من حالات مختلفة.
        </p>
        <p className="text-lg">
          قد تكون هذه المشاعر تجارب عشتها بنفسي أو لاحظتها في من حولي، وربما
          أحياناً أكتب عن مشاعر تخيلتها في لحظات من الهدوء أو الانفعال. ما أكتبه
          ليس مجرد كلمات، بل هو رحلة عاطفية أود أن أشاركها معكم. آمل أن تجدوا في
          مقالاتي شيئاً يعبر عنكم، أو ينير لكم جانباً لم تكونوا قد رأيتموه من
          قبل.
        </p>
        <p className="text-lg">
          من خلال هذا الموقع، أقدم لكم مقالاتي التي هي مزيج من الواقع والخيال،
          من المشاعر الإنسانية التي نعيشها جميعاً. إنني أؤمن أن الكلمات تستطيع
          أن تعكس ما يدور في داخلنا، وقد تكون وسيلة لفهم أنفسنا بشكل أفضل.
        </p>
        <p className="text-lg">
          إذا كنت تجد في مقالاتي ما يشبهك، فأنا سعيد بذلك. وإذا لم تجد ما يلامس
          قلبك بعد، فربما في المستقبل، ستجد الكلمات التي تلمسك وتكسر صمتك.
        </p>
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-700 transition font-medium"
        >
          العودة إلى المقالات
        </Link>
      </div>
    </div>
  );
};

export default About;
