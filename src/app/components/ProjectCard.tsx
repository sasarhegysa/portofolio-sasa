import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoLink?: string;
  repoLink?: string;
}

const ProjectCard = ({ title, description, image, techStack, demoLink, repoLink }: ProjectProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group">
      {/* Bagian Gambar */}
      <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
        {/* Efek overlay saat hover */}
        <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-all duration-300 z-10" />
        {/* Placeholder Image - Nanti ganti src dengan path gambarmu */}
        <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium bg-slate-100">
           {/* <Image src={image} alt={title} fill className="object-cover" /> */}
           [Gambar Project: {title}]
        </div>
      </div>

      {/* Bagian Konten */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Badges Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-100"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Tombol Action */}
        <div className="flex gap-3">
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              className="flex-1 text-center py-2 px-4 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Live Demo
            </a>
          )}
          {repoLink && (
            <a 
              href={repoLink} 
              target="_blank" 
              className="flex-1 text-center py-2 px-4 border border-slate-300 text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-50 transition"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;