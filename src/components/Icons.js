import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSyncAlt,
  faHeart,
  faTimesCircle,
  faEye,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

export const SyncIcon = <FontAwesomeIcon ic icon={faSyncAlt} />;
export const HeartIcon = ({ className }) => (
  <FontAwesomeIcon icon={faHeart} className={className} />
);
export const DeleteIcon = <FontAwesomeIcon icon={faTimesCircle} />;
export const EyeIcon = <FontAwesomeIcon icon={faEye} />;
export const LoadIcon = <FontAwesomeIcon icon={faSpinner} />;
