# !/usr/bin/env python3
""" this is a function with annotated parameters.
and return values with appropriate types."""

from typing import List, Union, Tuple, Sequence, Iterable

def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
  return [(i, len(i)) for i in lst]

