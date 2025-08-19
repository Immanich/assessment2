import Layout from "./app/layout";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import {
  FileText,
  ImageIcon,
  VideoIcon,
  Folder,
  MoreHorizontal,
  Settings,
  Image,
  Film,
} from "lucide-react";

function App() {
  const uploadData = [
    { day: "01", uploads: 50 },
    { day: "02", uploads: 55 },
    { day: "03", uploads: 60 },
    { day: "04", uploads: 95 },
    { day: "05", uploads: 55 },
    { day: "06", uploads: 85 },
    { day: "07", uploads: 55 },
    { day: "08", uploads: 50 },
    { day: "09", uploads: 25 },
    { day: "10", uploads: 30 },
    { day: "11", uploads: 40 },
    { day: "12", uploads: 60 },
    { day: "13", uploads: 30 },
    { day: "14", uploads: 20 },
    { day: "15", uploads: 50 },
    { day: "16", uploads: 95 },
    { day: "17", uploads: 30 },
    { day: "18", uploads: 65 },
    { day: "19", uploads: 50 },
    { day: "20", uploads: 30 },
    { day: "21", uploads: 32 },
    { day: "22", uploads: 50 },
    { day: "23", uploads: 95 },
    { day: "24", uploads: 40 },
    { day: "25", uploads: 50 },
    { day: "26", uploads: 30 },
    { day: "27", uploads: 40 },
    { day: "28", uploads: 95 },
    { day: "29", uploads: 45 },
    { day: "30", uploads: 35 },
  ];

  const storageData = [
    {
      title: "Documents",
      count: 1390,
      size: "2.1 GB used",
      usedPercentage: 35,
      icon: <FileText size={20} className="text-blue-600" />,
      color: "bg-blue-100",
    },
    {
      title: "Images",
      count: 5678,
      size: "3.8 GB used",
      usedPercentage: 62,
      icon: <ImageIcon size={20} className="text-green-600" />,
      color: "bg-green-100",
    },
    {
      title: "Videos",
      count: 901,
      size: "7.5 GB used",
      usedPercentage: 89,
      icon: <VideoIcon size={20} className="text-purple-600" />,
      color: "bg-purple-100",
    },
    {
      title: "Others",
      count: 234,
      size: "1.2 GB used",
      usedPercentage: 28,
      icon: <Folder size={20} className="text-yellow-600" />,
      color: "bg-yellow-100",
    },
  ];

  // Data for recently uploaded files
  const recentFiles = [
    {
      name: "project-proposal.docx",
      size: "2.38 MB",
      uploadDate: "Mar 15, 2024",
      icon: <FileText size={20} className="text-gray-400" />,
    },
    {
      name: "company-logo.png",
      size: "1.14 MB",
      uploadDate: "Mar 14, 2024",
      icon: <Image size={20} className="text-gray-400" />,
    },
    {
      name: "presentation.pptx",
      size: "5.34 MB",
      uploadDate: "Mar 13, 2024",
      icon: <FileText size={20} className="text-gray-400" />,
    },
    {
      name: "budget.xlsx",
      size: "957.03 KB",
      uploadDate: "Mar 12, 2024",
      icon: <FileText size={20} className="text-gray-400" />,
    },
    {
      name: "product-video.mp4",
      size: "150.68 MB",
      uploadDate: "Mar 11, 2024",
      icon: <Film size={20} className="text-gray-400" />,
    },
  ];

  // Data for folder list
  const folders = [
    {
      name: "Documents",
      items: "120 items",
      modified: "2023-04-15",
    },
    {
      name: "Images",
      items: "250 items",
      modified: "2023-04-10",
    },
    {
      name: "Projects",
      items: "45 items",
      modified: "2023-04-18",
    },
    {
      name: "Downloads",
      items: "80 items",
      modified: "2023-04-05",
    },
  ];

  return (
    <Layout>
      {/* <header className="text-white">asdsa</header> */}
      <div className="min-h-screen bg-black p-6">
        <div className="w-full">
          <header></header>
          <div className="mb-8 flex items-center justify-between">
            {/* Left side: Title */}
            <h1 className="text-3xl font-bold text-white">
              File Manager Dashboard
            </h1>

            {/* Right side: Upload Button */}
            <button className="flex items-center gap-2 px-4 py-2 bg-lime-600 hover:bg-lime-700 duration-200 hover:bg-lime-600 text-white text-sm font-medium rounded-full shadow cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-cloud-upload-icon lucide-cloud-upload"
              >
                <path d="M12 13v8" />
                <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                <path d="m8 17 4-4 4 4" />
              </svg>{" "}
              File Upload
            </button>
          </div>

          {/* Storage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {storageData.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-black border border-gray-800"
              >
                <CardContent className="px-6 text-white">
                  {/* Top row: Title (left) and Icon (right) */}
                  <div className="flex items-center justify-between mb-1">
                    <h1 className="font-medium text-lg">{item.title}</h1>
                    <div className={`px-3 w-2 rounded-full`}>
                      <div className="w-8 h-8">{item.icon}</div>
                    </div>
                  </div>

                  {/* Count below */}
                  <span className="text-2xl font-bold">{item.count}</span>

                  {/* Size info */}
                  <p className="text-sm text-gray-400 mt-1">{item.size}</p>

                  {/* Progress bar */}
                  <div className="mt-4">
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-lime-600"
                        style={{ width: `${item.usedPercentage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      {item.usedPercentage}% of storage used
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Folders + Storage Used */}
          <div className="mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              {folders.map((folder, index) => (
                <Card key={index} className="bg-black border border-gray-800">
                  <CardContent className="px-4 py-1 text-white">
                    <div className="flex items-center justify-between mb-3">
                      {/* Left side: folder icon + name */}
                      <div className="flex items-center space-x-3">
                        <Folder size={20} className="text-gray-400" />
                        <p className="font-medium">{folder.name}</p>
                      </div>

                      {/* Right side: more options icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-ellipsis-vertical text-gray-400 cursor-pointer hover:text-white transition"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" />
                      </svg>
                    </div>

                    <p className="text-sm text-gray-400 mb-5">{folder.items}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                      <p>Last modified: {folder.modified}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-yellow-400 cursor-pointer"
                      >
                        <path d="M12 2l2.9 6.6L22 9.3l-5 4.9L18 21l-6-3.2L6 21l1-6.8-5-4.9 7.1-0.7L12 2z" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Storage Space Used */}
              <Card className="bg-black border border-gray-800 lg:col-span-2">
                <CardContent className="px-4 py-1 text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <div>
                      <p className="font-medium">Storage Space Used</p>
                      <p className="text-sm text-gray-400">
                        See your remaining file storage
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-row justify-between">
                      <p className="font-medium">1.8 GB used</p>
                      <p className="text-sm text-gray-400 mb-2">3 GB total</p>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-lime-600"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* File Upload Chart + Recent Files */}
          <div className="grid grid-cols-12 gap-4">
            {/* Chart */}
            <div className="col-span-6">
              <Card className="bg-black border border-gray-800 h-full flex flex-col">
                <CardHeader className="flex items-center justify-between">
                  <CardTitle className="text-lg text-white">
                    <h1 className="m-0">File Upload Chart</h1>
                    <p className="text-sm text-gray-400 m-0">
                      Number of files uploaded in the last 30 days
                    </p>
                  </CardTitle>

                  <button className="flex items-center gap-2 text-sm px-4 py-2 bg-black hover:bg-gray-900 duration-200 border border-gray-800 rounded-full text-gray-300 cursor-pointer o">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-calendar-icon lucide-calendar cursor-pointer"
                    >
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M3 10h18" />
                    </svg>
                    Pick a date
                  </button>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="h-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={uploadData}
                        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                      >
                        <defs>
                          <linearGradient
                            id="colorUploads"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#a4a4a4ff"
                              stopOpacity={1}
                            />
                            <stop
                              offset="95%"
                              stopColor="#b3b3b3ff"
                              stopOpacity={0.1}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid
                          strokeDasharray="3 3"
                          vertical={false}
                          stroke="#1f2937"
                        />
                        <XAxis
                          dataKey="day"
                          tick={{ fontSize: 10, fill: "#bebebeff" }}
                          tickLine={false}
                          axisLine={false}
                        />
                        <YAxis
                          tick={{ fontSize: 10, fill: "#9ca3af" }}
                          tickLine={false}
                          axisLine={false}
                          domain={[0, 100]}
                          ticks={[0, 25, 50, 75, 100]}
                        />
                        <Area
                          type="monotone"
                          dataKey="uploads"
                          stroke="#888888ff"
                          fill="url(#colorUploads)"
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recently Uploaded Files */}
            <div className="col-span-6">
              <Card className="bg-black border border-gray-800 h-full">
                <CardHeader className="flex items-center justify-between">
                  <CardTitle className="text-lg text-white">
                    Recently Uploaded Files
                  </CardTitle>
                  <button className="p-1 hover:bg-gray-800 rounded">
                    <Settings
                      size={20}
                      className="text-gray-400 cursor-pointer hover:text-gray-500 duration-200"
                    />
                  </button>
                </CardHeader>

                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-300">
                      <thead className="text-md text-gray-400 border-b border-gray-700">
                        <tr>
                          <th scope="col" className="px-4 py-2 font-medium">
                            Name
                          </th>
                          <th scope="col" className="px-4 py-2 font-medium">
                            Size
                          </th>
                          <th scope="col" className="px-4 py-2 font-medium">
                            Upload Date
                          </th>
                          <th
                            scope="col"
                            className="px-4 py-2 font-medium text-right"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentFiles.map((file, index) => (
                          <tr
                            key={index}
                            className="border-b border-gray-800 last:border-0 hover:bg-gray-800"
                          >
                            {/* File Name + Icon */}
                            <td className="px-4 py-4 flex items-center space-x-2">
                              {file.icon}
                              <span className="font-medium text-white truncate">
                                {file.name}
                              </span>
                            </td>

                            {/* File Size */}
                            <td className="px-4 py-2">{file.size}</td>

                            {/* Upload Date */}
                            <td className="px-4 py-2">{file.uploadDate}</td>

                            {/* Actions */}
                            <td className="px-4 py-2 text-right">
                              <button className="p-1 hover:bg-gray-700 rounded hover:text-gray-300 duration-200 cursor-pointer">
                                <MoreHorizontal
                                  size={16}
                                  className="text-gray-400 hover:text-gray-300 duration-200"
                                />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
