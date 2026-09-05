import fs from 'fs';
import path from 'path';

const componentsDir = 'c:\\Users\\Devang\\OneDrive\\Desktop\\tars_website\\frontend\\src\\app\\components';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // h1, h2 -> font-title
  content = content.replace(/<(h1|h2)[^>]*className="([^"]*)font-body([^"]*)"/g, '<$1 className="$2font-title$3"');
  content = content.replace(/<(h1|h2)[^>]*className="([^"]*)font-heading([^"]*)"/g, '<$1 className="$2font-title$3"');

  // h3 -> font-heading (subtitles)
  content = content.replace(/<h3[^>]*className="([^"]*)font-body([^"]*)"/g, '<h3 className="$1font-heading$2"');
  
  // p with large text -> font-heading
  content = content.replace(/<p[^>]*className="([^"]*)font-body([^"]*(?:text-xl|text-2xl|text-lg|text-3xl|text-4xl)[^"]*)"/g, '<p className="$1font-heading$2"');
  
  // Update other components specifically
  // Hero.tsx - p is already updated by above regex if it has text-xl
  // Team.tsx - h3 is already updated by above regex
  // VisionMission.tsx - h3 is updated. The div with text-lg:
  content = content.replace(/<div[^>]*className="([^"]*)text-lg[^"]*font-body([^"]*)"/g, function(match) {
    return match.replace('font-body', 'font-heading');
  });

  // DepartmentCard.tsx - h3 is updated. The p with md:text-xl:
  content = content.replace(/<p[^>]*className="([^"]*)md:text-xl[^"]*font-body([^"]*)"/g, function(match) {
    return match.replace('font-body', 'font-heading');
  });

  // DepartmentCard.tsx - the span with text-lg:
  content = content.replace(/<span[^>]*className="([^"]*)font-body text-lg([^"]*)"/g, '<span className="$1font-heading text-lg$2"');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

walkDir(componentsDir);
console.log('Done!');
