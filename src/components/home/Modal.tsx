"use client";

import { modalData, type ModalType } from "@/lib/modal-data";

interface ModalProps {
  type: ModalType | null;
  onClose: () => void;
}

export function Modal({ type, onClose }: ModalProps) {
  if (!type) return null;

  const content = modalData[type];

  return (
    <div
      className="modal-overlay open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-box">
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <div className="modal-tag">{content.tag}</div>
        <div className="modal-heading">{content.heading}</div>
        <div className="modal-body">{content.body}</div>
        {content.fields.map((field) => (
          <input
            key={field}
            className="modal-field"
            type="text"
            placeholder={field}
          />
        ))}
        <button type="button" className="btn-primary btn-primary-full" onClick={onClose}>
          {content.cta}
        </button>
      </div>
    </div>
  );
}
