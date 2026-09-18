import React, { useState } from 'react';
import { Publication } from '../types';
import { Check, Copy, X, ExternalLink } from 'lucide-react';

interface BibtexModalProps {
  publication: Publication | null;
  onClose: () => void;
}

export const BibtexModal: React.FC<BibtexModalProps> = ({ publication, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!publication) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(publication.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textArea = document.createElement('textarea');
      textArea.value = publication.bibtex;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-bibtex-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div id="modal-bibtex-title" className="modal-title">
            Cite Publication (BibTeX)
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div style={{ marginBottom: '12px' }}>
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
            {publication.title}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            DOI: {publication.doi}
          </div>
        </div>

        <pre className="bibtex-code">
          <code>{publication.bibtex}</code>
        </pre>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
          <a 
            href={publication.zenodoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline btn-sm"
          >
            <ExternalLink size={14} />
            View Record on Zenodo
          </a>
          <button className="btn btn-primary btn-sm" onClick={handleCopy}>
            {copied ? (
              <>
                <Check size={14} />
                Copied to Clipboard
              </>
            ) : (
              <>
                <Copy size={14} />
                Copy BibTeX Citation
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
