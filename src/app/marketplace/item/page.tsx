"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Share2,
  MessageCircle,
  MapPin,
  Star,
  Shield,
  ArrowLeft,
  ChevronRight,
  Info,
  AlertCircle,
} from "lucide-react";
import itemData from "@/data/marketplace-item.json";

const MarketplaceItem = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [saved, setSaved] = useState(false);

  const item = itemData;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-6">
        <Link href="/marketplace">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            Back to Marketplace
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Image Gallery */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="relative h-[500px]">
              <img
                src={item.images[currentImageIndex]}
                alt={item.title}
                className="w-full h-full object-contain bg-gray-50"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="p-2 bg-white rounded-full text-gray-700 hover:bg-gray-100 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
                <button
                  className={`p-2 rounded-full transition-colors ${
                    saved
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setSaved(!saved)}
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>
              {item.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {item.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        currentImageIndex === index
                          ? "bg-blue-600"
                          : "bg-gray-300"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h1>
                  <div className="mt-2 flex items-center gap-4 text-gray-500">
                    <span>{item.category}</span>
                    <span>•</span>
                    <span>{item.condition}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">
                    {formatPrice(item.price)}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span>{item.location}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <Info className="h-5 w-5 text-gray-400" />
                  <div className="text-sm">
                    Listed {formatDate(item.listed)} • {item.views} views •{" "}
                    {item.saves} saves
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Description
            </h2>
            <p className="text-gray-600 whitespace-pre-line">
              {item.description}
            </p>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Related Items */}
          <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Similar Items
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {item.relatedItems.map((relatedItem) => (
                <div
                  key={relatedItem.id}
                  className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <img
                    src={relatedItem.image}
                    alt={relatedItem.title}
                    className="h-20 w-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {relatedItem.title}
                    </h3>
                    <div className="text-lg font-semibold text-blue-600 mt-1">
                      {formatPrice(relatedItem.price)}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {relatedItem.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Seller Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <img
                src={item.seller.avatar}
                alt={item.seller.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900">
                    {item.seller.name}
                  </h3>
                  {item.seller.verified && (
                    <div className="text-blue-500">
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  )}
                </div>
                <div className="mt-1 flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{item.seller.rating}</span>
                  <span className="text-gray-500">
                    ({item.seller.reviews} reviews)
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  <div>Member since {item.seller.memberSince}</div>
                  <div>{item.seller.listings} active listings</div>
                </div>
                <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Contact Seller
                </button>
              </div>
            </div>
          </div>

          {/* Safety Tips */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-2 text-gray-900 font-semibold mb-4">
              <Shield className="h-5 w-5 text-blue-600" />
              Safety Tips
            </div>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-gray-400 mt-0.5" />
                Meet in a safe, public place
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-gray-400 mt-0.5" />
                Don't pay in advance
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-gray-400 mt-0.5" />
                Check the item before buying
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-between">
                <span>Report Listing</span>
                <ChevronRight className="h-5 w-5" />
              </button>
              <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-between">
                <span>Share Listing</span>
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceItem;
