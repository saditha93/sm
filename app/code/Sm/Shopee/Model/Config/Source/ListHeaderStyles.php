<?php
/*------------------------------------------------------------------------
# SM Shopee - Version 1.0.0
# Copyright (c) 2016 YouTech Company. All Rights Reserved.
# @license - Copyrighted Commercial Software
# Author: YouTech Company
# Websites: http://www.magentech.com
-------------------------------------------------------------------------*/

namespace Sm\Shopee\Model\Config\Source;

class ListHeaderStyles implements \Magento\Framework\Option\ArrayInterface
{
	public function toOptionArray()
	{
		return [
			['value' => 'header-1', 'label' => __('Header Style 1')],
			['value' => 'header-2', 'label' => __('Header Style 2')]
		];
	}
}