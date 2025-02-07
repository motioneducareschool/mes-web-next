// components/NoticeBoard.tsx
import Link from "next/link";

const notices = [
  {
    title: "Class XII Board Results 2024",
    date: "May 25, 2024",
    link: "https://drive.google.com/result-link",
    type: "result",
  },
  {
    title: "Summer Vacation Schedule",
    date: "May 20, 2024",
    link: "https://drive.google.com/vacation-schedule",
    type: "holiday",
  },
  {
    title: "Admission Open 2025-26",
    date: "May 18, 2024",
    link: "https://drive.google.com/admission-form",
    type: "admission",
  },
  {
    title: "Sports Day Schedule",
    date: "May 15, 2024",
    link: "https://drive.google.com/sports-day",
    type: "event",
  },
  {
    title: "Sports Day Schedule",
    date: "May 15, 2024",
    link: "https://drive.google.com/sports-day",
    type: "event",
  },
  {
    title: "Sports Day Schedule",
    date: "May 15, 2024",
    link: "https://drive.google.com/sports-day",
    type: "event",
  },
];

export function NoticeBoard() {
  return (
    <div className="h-[500px] bg-white rounded-xl shadow-lg p-6 border border-blue-50">
      <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
        <span className="bg-blue-100 p-2 rounded-lg">📢</span>
        Latest Notices
      </h2>
      <div className="h-[calc(100%-60px)] overflow-y-auto space-y-4 pr-3">
        {notices.map((notice, index) => (
          <Link
            key={index}
            href={"#"}
            target="_blank"
            className="block p-4 rounded-lg hover:bg-blue-50 transition-colors group border border-transparent hover:border-blue-200"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                {notice.type === "result" && "📝"}
                {notice.type === "holiday" && "🎉"}
                {notice.type === "admission" && "🎓"}
                {notice.type === "event" && "🏅"}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 group-hover:text-blue-600">
                  {notice.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{notice.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
