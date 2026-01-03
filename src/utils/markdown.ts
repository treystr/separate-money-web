/**
 * Utility functions for loading and processing markdown files
 */

import { marked } from 'marked';

/**
 * Load a markdown file from the content directory
 * @param filename - The filename (e.g., 'section-01.md' or 'sections/section-01.md')
 * @returns The markdown content as a string, or null if not found
 */
export async function loadMarkdownFile(filename: string): Promise<string | null> {
  try {
    const markdownModules = import.meta.glob('../../content/**/*.md', { eager: false, as: 'raw' });
    const filePath = `../../content/${filename}`;
    
    if (markdownModules[filePath]) {
      const content = await markdownModules[filePath]();
      return content as string;
    }
    
    return null;
  } catch (error) {
    console.error(`Error loading markdown file ${filename}:`, error);
    return null;
  }
}

/**
 * Convert markdown to HTML
 * @param markdown - The markdown content
 * @returns The HTML content
 */
export function markdownToHtml(markdown: string): string {
  marked.setOptions({
    breaks: true,
    gfm: true,
  });
  
  return marked(markdown);
}

/**
 * Open a markdown modal by ID
 * @param modalId - The ID of the modal element
 */
export function openMarkdownModal(modalId: string): void {
  const modal = document.getElementById(modalId) as HTMLDialogElement | null;
  if (modal) {
    modal.showModal();
  }
}

/**
 * Close a markdown modal by ID
 * @param modalId - The ID of the modal element
 */
export function closeMarkdownModal(modalId: string): void {
  const modal = document.getElementById(modalId) as HTMLDialogElement | null;
  if (modal) {
    modal.close();
  }
}

